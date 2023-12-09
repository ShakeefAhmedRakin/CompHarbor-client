Website Name : Computer Harbor <br>
Live Link: https://bytebrilliance-5c61e.web.app/

# Technologies
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=firebase,mongodb,react,tailwind,express,nodejs&perline=8" />
  </a>
</p>

# Features

1. **Theme Switcher**:
   For the website's user interface, I incorporated a theme switcher feature, enabling users to seamlessly switch between light and dark themes. This was achieved by using Tailwind dark classes.

2. **User-Specific Carts**:
   Every user was granted their own distinct shopping cart, providing them with the ability to independently add and remove products. The cart data was securely stored in a MongoDB database, with each user's cart tied to their unique user id.

3. **Firebase Authentication**:
   I integrated Firebase authentication for user registration and login, offering two methods: email and password, and Google login through Firebase. The logins and registration pages have relevant toasts about password authentication, errors and successful logins and registrations.

4. **Product Information Management**:
   Users can add and update product information with forms. The data is stored in a MongoDB database. All the changes and additions are immediately reflected on the website.

5. **Global Product Information Synchronization**:
   A comprehensive synchronization system was established to propagate product information updates throughout the website, affecting all instances, including user shopping carts. When a product's details were modified, changes were mirrored not only in the central product database but also in all relevant sections of the website. This ensured data consistency and provided users with up-to-date product information, even in their shopping carts.

6. **Dynamic Redirects**:
   Users are dynamically redirected to relevant parts of the website upon successful actions like login or registration where the user is redirected to the home page. When a user adds a product based on the brand, he/she is redirected to the brand's page where he/she can view their added product. When a user updates a product, he/she is redirected to the products page where he/she can view the changes he/she made.
