# Librando-BACK

1.0.0: Only the methods mentioned below are available.
        Authorization not required

## API METHODS

Generic Path: http://localhost:3001/api/

### USERS

#### Path: http://localhost:3001/api/users

* GET all users: http://localhost:3001/api/users/
* POST new user: http://localhost:3001/api/users/register
* POST login user: http://localhost:3001/api/users/login
* GET logout user: http://localhost:3001/api/logout
* PUT edit user: http://localhost:3001/api/:userId

### BOOKS

#### Path: http://localhost:3001/api/books

* GET all books: http://localhost:3001/api/books/
* GET books by ID: http://localhost:3001/api/books/:bookID
* POST new book: http://localhost:3001/api/books/create
* PUT edit book: http://localhost:3001/api/books/change/:bookId
* PUT soft delete book: http://localhost:3001/api/books/delete/:bookId

### ORDER

* NOT TESTED YET!

### STATUS

* NOT TESTED YET!

### PAYMENT METHODS

* NOT TESTED YET!

### REVIEWS

#### Path: http://localhost:3001/api/reviews

* GET all reviews and rates: http://localhost:3001/api/reviews/
* GET reviews and rates by book ID: http://localhost:3001/api/reviews/:bookId
* GET Rates avarages by book ID: http://localhost:3001/api/reviews/rates/:bookId
* POST new review: http://localhost:3001/api/review/new


# POSTMAN COLLECTION:
https://www.getpostman.com/collections/7cf61cf99122ccd4181f
