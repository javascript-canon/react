// A Stateless component
export const Page404 = () =>
  <div className="page-404" itemProp="mainContentOfPage" itemType="http://schema.org/CreativeWork">
      <h1 className="header__title">404 error not found</h1>
      <img src="/img/404-image-one.png" className="page-404__image page-404--image-one" alt="Image one of the JavaScript Canon's 404 page" />
      <img src="/img/404-image-two.png" className="page-404__image page-404--image-two" alt="Image one of the JavaScript Canon's 404 page" />
      <p className="page-404__content">
        But while you're here, why don't you <a href="/">check out our home page</a> or <a href="/about">learn what we're all about</a>.
      </p>
    </div>