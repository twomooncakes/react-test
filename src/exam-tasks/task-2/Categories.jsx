function Categories({productCategories}) {
    return (
        <main id="task2">
            <h1>Categories</h1>
            <div className="categories-container">
                {productCategories.map((category) => {
                    return (
                        <div className="category-wrapper">
                            <img src={category.image} />
                            <h2>{category.title}</h2>
                        </div>
                    )
                })}
            </div>
            
        </main>
    );
}

export default Categories;