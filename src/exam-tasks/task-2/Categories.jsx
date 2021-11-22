import css from './Categories.module.css';

function Categories({productCategories}) {
    return (
        <main className={css.container}>
            <h1>Categories</h1>
            <div className={css['categories-container']}>
                {productCategories.map((category) => {
                    return (
                        <div className={css['category-wrapper']}>
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