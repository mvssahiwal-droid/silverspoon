const menuData = [
    {
        category: "VORSPEISEN (Appetizers)",
        items: [
            { id: "001", name: "Mixed Veg Pakora", price: "€ 5,50", allergens: "A, G", description: "Gemischtes Gemüse, paniert im Kichererbsenmehlteig", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "002", name: "Samosa (2 Stück)", price: "€ 5,00", allergens: "A, G", description: "Gefüllte Teigtaschen mit Gemüse", image: "assets/samosa.png" },
            { id: "003", name: "Paneer Pakora", price: "€ 6,50", allergens: "G", description: "Hausgemachter, indischer Käse im Kichererbsenmehlteig gebacken", image: "assets/mixed_veg_pakora.png" },
            { id: "004", name: "Shish Kebab (3 Stück)", price: "€ 6,50", allergens: "A, D, G, H", description: "Hühnerfleisch", image: "assets/mixed_veg_pakora.png" },
            { id: "005", name: "Rote Linsensuppe", price: "€ 4,50", allergens: "A", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "006", name: "Gemüsesuppe", price: "€ 4,50", allergens: "A", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "007", name: "Tomatensuppe", price: "€ 4,00", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "008", name: "Spinat Suppe", price: "€ 4,50", allergens: "A", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "HAUPTGERICHTE - CHICKEN",
        items: [
            { id: "019", name: "Chicken Curry", price: "€ 12,50", allergens: "A, G", description: "Hühnerfleisch in milder Currysauce", image: "assets/mixed_veg_pakora.png" },
            { id: "020", name: "Chili Chicken", price: "€ 14,00", allergens: "A, G, H", description: "Gebratene Hühnerbruststücke mit Chili, Paprika & Zwiebel", image: "assets/mixed_veg_pakora.png" },
            { id: "021", name: "Chicken Korma", price: "€ 13,50", allergens: "G", description: "Hühnerfleisch in Kokos - Mandel Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "022", name: "Chicken Mango", price: "€ 14,00", allergens: "G", description: "Hühnerfleisch in Mango Curry Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "023", name: "Butter Chicken", price: "€ 14,00", allergens: "G", description: "Gegrilltes Hühnerfleisch in cremiger Tomaten-Buttersauce", image: "assets/butter_chicken.png" },
            { id: "024", name: "Chicken Vindaloo", price: "€ 13,50", allergens: "A, G, H", description: "Hühnerfleisch mit Erdäpfeln in pikanter Currysauce", image: "assets/mixed_veg_pakora.png" },
            { id: "025", name: "Chicken Spinat", price: "€ 13,50", allergens: "G", description: "Pikant, würziges Hühnerfleisch mit Spinat", image: "assets/mixed_veg_pakora.png" },
            { id: "026", name: "Chicken Sabji", price: "€ 13,50", allergens: "G", description: "Gemüse mit gegrillten Hühnerstreifen in würziger Currysauce", image: "assets/mixed_veg_pakora.png" },
            { id: "027", name: "Chicken Shashlik", price: "€ 15,50", allergens: "A, G, H, O", description: "Chicken Grilled mit Paprika, Tomaten und Zwiebel gegrillt, dazu Pilau Reis", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "HAUPTGERICHTE - BEEF & LAMB",
        items: [
            { id: "028", name: "Beef Curry", price: "€ 13,90", allergens: "G", description: "Fein, würzige Currysauce mit Rindfleisch", image: "assets/mixed_veg_pakora.png" },
            { id: "029", name: "Beef Palak", price: "€ 13,90", allergens: "G", description: "Rindfleisch in wirzigem Spinat", image: "assets/mixed_veg_pakora.png" },
            { id: "030", name: "Beef Vindaloo", price: "€ 13,90", allergens: "G, H", description: "Rindfleisch, Erdäpfel in pikantem Curry", image: "assets/mixed_veg_pakora.png" },
            { id: "031", name: "Beef Chan", price: "€ 13,90", allergens: "G", description: "Rindfleisch, mit Kichererbsen in würzigem Curry", image: "assets/mixed_veg_pakora.png" },
            { id: "032", name: "Beef Shahi Korma", price: "€ 14,00", allergens: "G, H", description: "Rindfleisch, in milder Cashewnuss Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "033", name: "Beef Mango", price: "€ 14,00", allergens: "G", description: "Rindfleisch in Mango Curry Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "034", name: "Beef Kokos", price: "€ 14,00", allergens: "G", description: "Rind, gegrillt, in würzigen Kokos-Curry", image: "assets/mixed_veg_pakora.png" },
            { id: "035", name: "Beef Madras", price: "€ 14,00", allergens: "G", description: "Rindfleisch Curry mit Paprika auf Madras Art", image: "assets/mixed_veg_pakora.png" },
            { id: "038", name: "Lamb Biryani", price: "€ 14,90", allergens: "A, G, H, O", description: "Indischer Gewürzreis mit Lamm, Mandeln Rosinen und Raita", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "BIRYANI GERICHTER",
        items: [
            { id: "036", name: "Veg Biryani", price: "€ 10,50", allergens: "A, G, H, O", description: "Indischer Gewürzreis mit Gemüse, Mandeln & Raita", image: "assets/mixed_veg_pakora.png" },
            { id: "037", name: "Chicken Biryani", price: "€ 13,00", allergens: "A, G, H, O", description: "Ind. Gewürzreis, gegrilltes Hühnerfleisch, Rosinen, Mandeln und Raita", image: "assets/mixed_veg_pakora.png" },
            { id: "039", name: "Shrimp Biryani", price: "€ 15,90", allergens: "D, G, H", description: "Duftender Basmatireis mit Garnelen in Biryani-Gewürzen", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "VEGETARISCHE GERICHTE",
        items: [
            { id: "040", name: "Mix Sabji", price: "€ 10,50", allergens: "G", description: "Gemischtes, gedünstetes Gemüse", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "041", name: "Dal Makhani", price: "€ 11,00", allergens: "G", description: "Schwarze Butterlinsen Dal nach Punjabi Art", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "042", name: "Palak Paneer", price: "€ 11,00", allergens: "G", description: "Hausgemachter, ind. Frischkäse mit Spinat", image: "assets/palak_paneer.png" },
            { id: "043", name: "Matar Paneer", price: "€ 11,00", allergens: "G", description: "Hausgemachter Käse mit Erbsen, in cremiger Curry-Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "044", name: "Chilli Paneer", price: "€ 11,50", allergens: "A, G, H, O", description: "Hausgemachter, indischer Käse mit Paprika Tomaten, Chili und Zwiebel", image: "assets/mixed_veg_pakora.png" },
            { id: "045", name: "Paneer Shashlik", price: "€ 11,50", allergens: "A, G, H, O", description: "Indischer Frischkäse am Spießchen mit Paprika, Tomaten und Zwiebel gegrillt, dazu Pilau Reis", image: "assets/mixed_veg_pakora.png" },
            { id: "046", name: "Aloo Gobi", price: "€ 11,00", allergens: "G", description: "Karfiol (Kartoffelgerst) somit winziger", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "047", name: "Shahi Paneer", price: "€ 11,50", allergens: "G", description: "Hausgemachter ind. Frischkäse mit Cashews und Rosinen in cremiger Korma-Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "048", name: "Malai Kofta", price: "€ 11,50", allergens: "A, G", description: "Gemüsebällchen in Kokos-Mandel Sauce", image: "assets/mixed_veg_pakora.png" },
            { id: "049", name: "Navratan Korma", price: "€ 11,50", allergens: "G", description: "Gemüsecurry mit Kokosmilch & Cashews", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "050", name: "Aloo Chana Masala", price: "€ 10,50", allergens: "G", description: "Erdäpfel mit Kichererbsen in pikanter, würziger Sauce", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "051", name: "Tadka Dal", price: "€ 10,50", allergens: "G", description: "Gelbe Linsen mit Ghee & feinen Gewürzen", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "052", name: "Paneer Makhani", price: "€ 10,50", allergens: "G", description: "Hausgemachter, indischer Käse, in aromatischer Butter-Tomatensauce", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "SALATE",
        items: [
            { id: "057", name: "Grüner Salat", price: "€ 4,50", allergens: "A, G, M, N, O", description: "Frischer gemischter Grüdsalat mit Krauterdressing", image: "assets/mixed_veg_pakora.png" },
            { id: "058", name: "Gemischter Salat", price: "€ 6,50", allergens: "A, D, G, H", description: "Frischer gemischter Salat mit Tomaten, Gurken und Krauterdressing", image: "assets/mixed_veg_pakora.png" },
            { id: "059", name: "Chicken Salat", price: "€ 7,00", allergens: "A, D, G, H", description: "Grilled chicken breast strips on crisp tomatoes, olives, and lettuce with a homemade dressing", image: "assets/mixed_veg_pakora.png" },
            { id: "060", name: "Shrimp Salat", price: "€ 8,50", allergens: "A, D, G, H", description: "Garnelen auf frischem Gemüsesalat mit Zitronendressing", image: "assets/mixed_veg_pakora.png" },
            { id: "061", name: "Punjabi Paneer Salat", price: "€ 7,50", allergens: "A, G", description: "Traditioneller Salat, mild gewürzt, mit Frischkäse und Gemüse aus Punjab", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "BEILAGEN",
        items: [
            { id: "053", name: "Basmatireis", price: "€ 3,00", allergens: "—", vegan: true, image: "assets/mixed_veg_pakora.png" },
            { id: "054", name: "Garlic Naan", price: "€ 3,00", allergens: "A, G", description: "Mit Knoblauch", image: "assets/mixed_veg_pakora.png" },
            { id: "055", name: "Butter Naan", price: "€ 3,00", allergens: "A, G", description: "Mit Butter", image: "assets/mixed_veg_pakora.png" },
            { id: "056", name: "Raita (Joghurt mit Gurken)", price: "€ 4,00", allergens: "G", description: "Joghurt mit Gurken", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "NACHSPEISEN",
        items: [
            { id: "062", name: "Gulab Jamun", price: "€ 4,50", allergens: "A, G", description: "Gebackene Teigbällchen in Fruchtsirup", image: "assets/mixed_veg_pakora.png" },
            { id: "063", name: "Gajar Halwa", price: "€ 5,00", allergens: "A, G", description: "Traditionelles indisches Dessert aus Karotten, Milch und Nüssen", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "GETRÄNKE",
        items: [
            { id: "064", name: "Cola / Cola light", size: "0,33L", price: "€ 3,20", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "065", name: "Almdudler", size: "0,25L", price: "€ 2,90", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "066", name: "7 up / Fanta", size: "0,25L", price: "€ 2,50", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "067", name: "Apfelsaft", size: "0,50L", price: "€ 4,20", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "068", name: "Orangensaft", size: "0,50L", price: "€ 3,20", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "069", name: "Red Bull", size: "0,25L", price: "€ 3,90", allergens: "—", image: "assets/mixed_veg_pakora.png" },
            { id: "070", name: "Mango Lassi", size: "0,25L", price: "€ 3,50", allergens: "G", image: "assets/mixed_veg_pakora.png" },
            { id: "071", name: "Mineralwasser", size: "0,50L", price: "€ 3,20", allergens: "—", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "BIER",
        items: [
            { id: "081", name: "Budweiser", size: "0,5L", price: "€ 4,90", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "082", name: "Ottakringer Hell", size: "0,5L", price: "€ 4,90", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "083", name: "Ottakringer Dunkel", size: "0,5L", price: "€ 5,20", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "084", name: "Erdlinger Weizenbier", size: "0,5L", price: "€ 5,20", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "085", name: "Tsingtao Bier", size: "0,33L", price: "€ 4,50", allergens: "A", image: "assets/mixed_veg_pakora.png" },
            { id: "086", name: "King Fisher", size: "0,5L", price: "€ 4,90", allergens: "A", image: "assets/mixed_veg_pakora.png" }
        ]
    },
    {
        category: "WEIN",
        items: [
            { id: "093", name: "Grüner Veltliner", size: "0,75L", price: "€ 12,50", allergens: "L (Sulfite)", image: "assets/mixed_veg_pakora.png" },
            { id: "094", name: "Blauer Zweigelt", size: "0,75L", price: "€ 12,50", allergens: "L (Sulfite)", image: "assets/mixed_veg_pakora.png" }
        ]
    }
];
