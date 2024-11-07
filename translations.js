const translations = {
    ca: {
        ingredients: "Ingredients: Raïm, Àcids afegits (Àcid màlic, Àcid tartàric), Conservant (Sulfits), Estabilitizador (Goma aràbiga, Àcid fumàric)",
        porcio: "Porció mitjana de consum: 100ml",
        energia: "Valor energètic",
        greix: "Greix\nÀcids grassos saturats",
        sucre: "Hidrats de carboni\nSucres",
        fibra: "Fibra alimentària",
        protes: "Proteïnes",
        sal: "Sal",
        grau: "Grau d'alcohol"
    },
    en: {
        ingredients: "Ingredients: Grapes, Added acids (Malic acid, Tartaric acid), Preservative (Sulfites), Stabilizer (Arabic gum, Fumaric acid)",
        porcio: "Average serving size: 100ml",
        energia: "Energy value",
        greix: "Fat\nSaturated fatty acids",
        sucre: "Carbohydrates\nSugars",
        fibra: "Dietary fiber",
        protes: "Proteins",
        sal: "Salt",
        grau: "Alcohol content"
    },
    es: {
        ingredients: "Ingredientes: Uva, Ácidos añadidos (Ácido málico, Ácido tartárico), Conservante (Sulfitos), Estabilizador (Goma arábiga, Ácido fumárico)",
        porcio: "Porción media de consumo: 100ml",
        energia: "Valor energético",
        greix: "Grasa\nÁcidos grasos saturados",
        sucre: "Hidratos de carbono\nAzúcares",
        fibra: "Fibra alimentaria",
        protes: "Proteínas",
        sal: "Sal",
        grau: "Grado de alcohol"
    },
    fr: {
        ingredients: "Ingrédients: Raisin, Acides ajoutés (Acide malique, Acide tartrique), Conservateur (Sulfites), Stabilisateur (Gomme arabique, Acide fumarique)",
        porcio: "Portion moyenne de consommation: 100ml",
        energia: "Valeur énergétique",
        greix: "Matières grasses\nAcides gras saturés",
        sucre: "Glucides\nSucres",
        fibra: "Fibres alimentaires",
        protes: "Protéines",
        sal: "Sel",
        grau: "Degré d'alcool"
    },
    de: {
        ingredients: "Zutaten: Trauben, Zugesetzte Säuren (Apfelsäure, Weinsäure), Konservierungsstoff (Sulfite), Stabilisator (Gummi arabicum, Fumarsäure)",
        porcio: "Durchschnittliche Portionsgröße: 100ml",
        energia: "Energiewert",
        greix: "Fett\nGesättigte Fettsäuren",
        sucre: "Kohlenhydrate\nZucker",
        fibra: "Ballaststoffe",
        protes: "Eiweiß",
        sal: "Salz",
        grau: "Alkoholgehalt"
    }
};

function translatePage() {
    try {
        console.log('Translation started...');
        const language = document.getElementById('language-switcher').value;
        console.log('Selected language:', language);
        
        if (!translations[language]) {
            console.error('No translations found for language:', language);
            return;
        }

        const currentTranslations = translations[language];
        
        // Update each element with its translation
        Object.keys(currentTranslations).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                // For elements that need to preserve their label structure
                if (id === 'greix' || id === 'sucre') {
                    const [main, sub] = currentTranslations[id].split('\n');
                    element.innerHTML = `${main}<br>&nbsp;&nbsp;${sub}`;
                } 
                // Special case for ingredients which has a structure with strong tag
                else if (id === 'ingredients') {
                    const [label, content] = currentTranslations[id].split(': ');
                    element.innerHTML = `<strong>${label}:</strong> <span>${content}</span>`;
                }
                // For all other elements
                else {
                    element.textContent = currentTranslations[id];
                }
                console.log(`Updated ${id} with translation`);
            } else {
                console.warn(`Element with id '${id}' not found`);
            }
        });
        
        // Update the HTML lang attribute
        document.documentElement.lang = language;
        console.log('Translation completed');
    } catch (error) {
        console.error('Error during translation:', error);
    }
}

// Initialize with default language when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing translations...');
    const languageSwitcher = document.getElementById('language-switcher');
    
    // Add change event listener
    languageSwitcher.addEventListener('change', translatePage);
    
    // Initial translation
    translatePage();
});
