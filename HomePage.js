import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEase</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
            alt="Shopping experience" 
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop" alt="Electronics" />
              <h3>Electronics</h3>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop" alt="Fashion" />
              <h3>Fashion</h3>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" alt="Beauty" />
              <h3>Beauty</h3>
            </div>
            <div className="category-card">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" alt="Sports" />
              <h3>Sports & Fitness</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe with us</p>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy on all items</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Customer support available around the clock</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

