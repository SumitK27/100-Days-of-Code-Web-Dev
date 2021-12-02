# **Day 36** <!-- omit in toc -->

1. [**Variables**](#variables)
2. [**Constants**](#constants)
3. [**Styling with JavaScript**](#styling-with-javascript)
   1. [**Text Align**](#text-align)
   2. [**Font Size**](#font-size)
   3. [**Color**](#color)
   4. [**Background Color**](#background-color)
   5. [**Class Name**](#class-name)
   6. [**Class List**](#class-list)

## **Variables**

-   Value stored can be changed.

```javascript
let name = "Niko";
name = "Roman";
```

## **Constants**

-   Values stored can't be changed.
-   There is an exception with arrays and objects.
-   Avoids the accidental modification of the value.

```javascript
const PI = 3.14;
const array1 = [1, 2, 4];
const person = {
    name: "Niko",
};

array1[0] = 0; // Value at the index changes
person.name = "Roman"; // Property of the object changes
```

## **Styling with JavaScript**

-   Property names in JavaScript are in camelCase.
-   Values are assigned as a string.

### **Text Align**

```javascript
element.style.textAlign = "center";
```

### **Font Size**

```javascript
element.style.fontSize = "30px";
```

### **Color**

```javascript
element.style.color = "rgb(0, 120, 50)";
```

### **Background Color**

```javascript
element.style.backgroundColor = "rgb(0, 120, 50)";
```

### **Class Name**

-   Overwrites the list of classes on that element with the newly defined class.

```javascript
element.className = "first-class second-class";
```

### **Class List**

-   Lists the classes present on the element.
-   `add` method let's you add a class on the element.
-   `remove` method let's you remove a class from the element.

```javascript
element.classList.add("third-class");
element.classList.remove("third-class");
```
