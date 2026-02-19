document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will contact you shortly.');
            contactForm.reset();
        });
    }

    const menuContainer = document.getElementById('menu-container');

    if (!menuContainer) return;

    menuData.forEach(categoryData => {
        // Create Category Section
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = categoryData.category;
        categorySection.appendChild(categoryTitle);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'menu-items';

        categoryData.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item';

            itemCard.innerHTML = `
                <div class="item-content">
                    <div class="item-header">
                        <div class="item-title-group">
                            <span class="item-id">${item.id}.</span>
                            <span class="item-name">${item.name} ${item.size ? `<span class="item-size">(${item.size})</span>` : ''}</span>
                        </div>
                        <span class="item-price">${item.price}</span>
                    </div>
                     ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
                     <div class="item-footer">
                        <span class="item-allergens">Allergene: ${item.allergens}</span>
                     </div>
                </div>
            `;

            itemsGrid.appendChild(itemCard);
        });

        categorySection.appendChild(itemsGrid);
        menuContainer.appendChild(categorySection);
    });
});
