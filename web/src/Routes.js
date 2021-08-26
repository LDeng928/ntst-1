// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import EventsLayout from 'src/layouts/Admin/EventsLayout'
import ProductsLayout from 'src/layouts/Admin/ProductsLayout'
import ArticlesLayout from 'src/layouts/Admin/ArticlesLayout'
import NtstLayout from 'src/layouts/NtstLayout/NtstLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EventsLayout}>
        <Route path="/admin/events/new" page={AdminEventNewEventPage} name="adminNewEvent" />
        <Route path="/admin/events/{id:Int}/edit" page={AdminEventEditEventPage} name="adminEditEvent" />
        <Route path="/admin/events/{id:Int}" page={AdminEventEventPage} name="adminEvent" />
        <Route path="/admin/events" page={AdminEventEventsPage} name="adminEvents" />
      </Set>
      <Set wrap={ProductsLayout}>
        <Route path="/admin/products/new" page={AdminProductNewProductPage} name="adminNewProduct" />
        <Route path="/admin/products/{id:Int}/edit" page={AdminProductEditProductPage} name="adminEditProduct" />
        <Route path="/admin/products/{id:Int}" page={AdminProductProductPage} name="adminProduct" />
        <Route path="/admin/products" page={AdminProductProductsPage} name="adminProducts" />
      </Set>
      <Set wrap={ArticlesLayout}>
        <Route path="/admin/articles/new" page={AdminArticleNewArticlePage} name="adminNewArticle" />
        <Route path="/admin/articles/{id:Int}/edit" page={AdminArticleEditArticlePage} name="adminEditArticle" />
        <Route path="/admin/articles/{id:Int}" page={AdminArticleArticlePage} name="adminArticle" />
        <Route path="/admin/articles" page={AdminArticleArticlesPage} name="adminArticles" />
      </Set>
      <Set wrap={NtstLayout}>
      <Route path="/productdetail/{id:Int}" page={ProductdetailPage} name="productdetail" />
        <Route path="/article" page={ArticlePage} name="article" />
        <Route path="/product" page={ProductPage} name="product" />
        <Route path="/cart" page={CartPage} name="cart" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
