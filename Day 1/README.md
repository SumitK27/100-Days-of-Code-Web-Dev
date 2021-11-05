# **Day 1** <!-- omit in toc -->

1. [**What is Web Development**](#what-is-web-development)
2. [**How does the Web works**](#how-does-the-web-works)
   1. [**Anatomy**](#anatomy)
   2. [**Process**](#process)
   3. [**URL**](#url)
   4. [**DNS**](#dns)
3. [**Three Key Programming Languages**](#three-key-programming-languages)
   1. [**1. HTML**](#1-html)
   2. [**2. CSS**](#2-css)
   3. [**3. JS**](#3-js)
4. [**Creating our First HTML Page**](#creating-our-first-html-page)

---

## **What is Web Development**

Web Developers build Websites.

---

## **How does the Web works**

### **Anatomy**

Browsing the web is like calling a friend.

1. You call or ask something to your friend => Request
2. Your friend will reply you back => Response

### **Process**

1. You use a computer to use web
2. You type an address (called as URL) of the website
3. Your browser (client) sends a request to a remote server (computer operated by some computer) that is present somewhere in the world.
4. This request is sent in a standardized way through HTTP or HTTPS (Hypertext Transfer Protocol) which is understandable by both the client and the server.
5. The server has it's own code which has browser instructions that handlers what and how the browser should display the content.
6. This instructions are sent to the client by the server.

All this process usually happens in few milliseconds due to this visiting websites are very fast.
The content that is visible to the Client is called as Front-end.
The code at the server is known as Backend.

### **URL**

**Uniform Resource Locator**

Example -

```
https://google.com/search
```

**Protocol** - Hypertext Transfer Protocol Secure. `https`://google.com/search <br />
**Domain** - Human-readable address (identifier) of a website. https://`google.com`/search <br />
**Path** - Pointer to a specific resource. https:// google.com `/search`

### **DNS**

**IP: Internet Protocol**

-   A unique identifier (address) of network devices.
-   They are difficult to memorize.
-   Every device on the internet (or network) has an IP address.
-   Websites are also accessible through the IP address.

**Domain**

-   They are web addresses that are easier to remember by humans.
-   Connection to the web servers are made using Domains.
-   Not every device connected to the internet may have the Domain.

**Domain Name Servers**

-   They are the translation tables.
-   Stores the map of the domain and IP addresses.

When a client enters a domain name on the browser is entered, that address is sent to a DNS server the DNS in return sends the response with the IP address of the server to the client and then client communicates with the server by using the IP address.

---

## **Three Key Programming Languages**

The Browser Instructions mentioned earlier are the programming languages of the web.

### **1. HTML**

**Hypertext Markup Language**

-   Most important.
-   Represents the content and structure of the displayed page.
-   It controls the text, images, input forms, etc.
-   Although it is important, content with only HTML isn't stylish.

### **2. CSS**

**Cascading Style Sheets**

-   It is optional but every website uses it.
-   Allows us to apply style to the content on our website.
-   It controls the colors, position, etc.

### **3. JS**

**JavaScript**

-   It is optional.
-   It allows the interactivity needed to display the page.
-   It controls clicking of the buttons, convert something, etc.

---

## **Creating our First HTML Page**

1. Create an empty folder.
2. Create a file with name `index.html`
    1. `index.html` is a main entry point HTML document.
3. Open `index.html` with any text editor.
4. Add the following line.
    ```html
    <h1>Hello World!</h1>
    ```
5. Save the file.
6. Open it with any browser of your choice.
