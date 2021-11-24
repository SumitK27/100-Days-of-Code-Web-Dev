# **Day 28** <!-- omit in toc -->

1. [**More on Inputs**](#more-on-inputs)
   1. [**Checkbox**](#checkbox)
      1. [**Single Select**](#single-select)
      2. [**Multi-select**](#multi-select)
   2. [**Text Area**](#text-area)
   3. [**Dropdown**](#dropdown)
2. [**Adding Semantics to the Form**](#adding-semantics-to-the-form)
3. [**Buttons**](#buttons)
4. [**Validation Attributes**](#validation-attributes)
   1. [**Excluding Form Validations**](#excluding-form-validations)
   2. [**Required Field**](#required-field)
   3. [**Length**](#length)
      1. [**Min Length**](#min-length)
      2. [**Max Length**](#max-length)
   4. [**Value**](#value)
      1. [**Min**](#min)
      2. [**Max**](#max)
5. [**Other Attributes**](#other-attributes)
   1. [**Placeholder**](#placeholder)
   2. [**Rows**](#rows)
   3. [**Resizing Textarea**](#resizing-textarea)

## **More on Inputs**

### **Checkbox**

#### **Single Select**

-   `type` of the input should be set to `checkbox`.
-   default values are on and off when there is no `value` attribute mentioned.

```html
<input type="checkbox" id="agree-terms" name="terms" />
```

#### **Multi-select**

-   Allows you to select multiple items or values related to a particular thing.
-   `name` property should be assigned the same to all the related multi-select checkboxes.
-   `value` attribute defines the identifier to be sent to the server.

```html
<input type="checkbox" id="contact-email" value="email" name="contact" />
<label for="contact-email">Contact me via email</label>

<input type="checkbox" id="contact-phone" value="phone" name="contact" />
<label for="contact-phone">Contact me via phone</label>
```

### **Text Area**

-   Is a multi-line text input field.
-   Uses `textarea` tag.
-   It is not a void element. Rather it has a closing tag which is useful for placing the default text inside the textarea input.
-   `cols` & `rows` defines the width and height of the text area by using number of rows and columns to use initially.

```html
<textarea name="user-message" id="user-msg" cols="30" rows="5"></textarea>
```

### **Dropdown**

-   `select` tag is used to create a dropdown menu.
-   `options` defines the options to be displayed inside the dropdown menus.
-   `name` attribute is defined in the `select` tag
-   `value` attribute defines the identifier to be sent to the server.

```html
<select name="favorite-color" id="favorite-color">
    <option value="blue">Blue</option>
    <option value="black">Black</option>
    <option value="red">Red</option>
</select>
```

---

## **Adding Semantics to the Form**

-   It is optional to add semantic to your HTML forms.
-   Adding semantics helps you structure the form.

```html
<form action="./" method="GET">
    <section>
        <h2>Your Personal Details</h2>
        <ul>
            <li>
                <label for="username">Your name</label>
                <input type="text" name="user-name" id="username" />
            </li>
            <li>
                <label for="useremail">Your email address</label>
                <input type="email" name="user-email" id="useremail" />
            </li>
            <li>
                <label for="userpassword">Your password</label>
                <input type="password" name="user-password" id="userpassword" />
            </li>
        </ul>
    </section>

    <section>
        <h2>More Details</h2>
        <ul>
            <li>
                <label for="userage">Your age</label>
                <input type="number" step="1" name="user-age" id="userage" />
            </li>
            <li>
                <label for="userdob">Your date</label>
                <input type="date" name="user-dob" id="userdob" />
            </li>
            <li>
                <label for="favorite-color">Your favorite color?</label>
                <select name="favorite-color" id="favorite-color">
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                </select>
            </li>
        </ul>
    </section>
</form>
```

---

## **Buttons**

-   Typically used to submit forms.
-   Can control the behavior of the button with `type` attribute.
-   Default type of the button is submit.
-   Buttons can be used outside of the forms as well but needs javascript to make it operational.

```html
<button type="button">Submit</button>
```

-   `type="submit"` submits the form.
-   `type="button"` doesn't submits the form.
-   `type="reset"` resets the inputs in the form.

---

## **Validation Attributes**

### **Excluding Form Validations**

-   We can add a `novalidate` attribute to the form tag.
-   Its a boolean attribute. ie. that doesn't take any value.
-   Can be useful when we have to define some custom validation to the form.

```html
<form novalidate>
    <label for="useremail">Your email address</label>
    <input type="email" name="user-email" id="useremail" />
</form>
```

-   This will ignore the default validation of the input email field.

### **Required Field**

-   Marks the input field as required.
-   Form can't be submitted unless the required fields are filled.

```html
<input type="text" name="user-name" id="username" required />
```

### **Length**

-   Controls the amount of characters.

#### **Min Length**

-   Lets you add a validation by letting user input the value that is greater than or equal to the minimum length specified.

```html
<input type="password" minlength="8" />
```

#### **Max Length**

-   Lets you add a validation by letting user input the value that is less than or equal to the maximum length specified.

```html
<input type="password" maxlength="16" />
```

### **Value**

-   Displays the specified validation in the tooltip while submitting if value doesn't matches the condition.

#### **Min**

-   Sets the minimum value.

```html
<input type="number" min="18" />

<input type="date" min="1921-01-01" />
```

#### **Max**

-   Sets the maximum value.

```html
<input type="number" max="60" />

<input type="date" max="2003-01-01" />
```

-   For date input type the min and max value is set in the `YYYY-MM-DD` format. Date picker will hide or make the dates non-selectable if they don't match the conditions.

---

## **Other Attributes**

### **Placeholder**

-   Helps the guide the user with what kind of data should be entered in the input field.
-   Is not treated as a default value in the input.
-   Doesn't have the same accessibility as a label.
-   It gets hidden when you start typing in the input field.

```html
<input type="text" placeholder="Enter you name" />
```

### **Rows**

-   Used in text area.
-   Displays how big the text area should be.
-   It doesn't limit the size of the input.

### **Resizing Textarea**

-   Default value is `both`.
-   Can be set to `horizontal` to allow horizontally resizing.
-   Can be set to `vertical` to allow vertically resizing.
-   Can be set to `none` to disable resizing.

```css
textarea {
    resize: none;
}
```
