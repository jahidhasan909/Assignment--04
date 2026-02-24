1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?                                                                   
   Ans: getElementById only one id select to element and all time return one element.Most fast mathod.
   getElementsByClassName select element by class name and return multiple element.
   getElementsByClassName provide a htmlcollection and this collection is live it like array but is not array.
   querySelector use css selector and return first matching element.
   querySelectorAll use css selector and return all matching element.
   querySelectorAll provide a nodelist.


 
3. How do you create and insert a new element into the DOM?                                                                                                                          
   Ans: first work createElement() mathod use to create element.
   second work innerText or innerHtml use to content add.
   last work use appendChild() mathod and  element add to dom.



5. What is Event Bubbling? And how does it work?
   
   Ans: Bubbling is event child to parent get up.
   exp: Button click than.
   *.button *.div *.body *document
   all spot access.


   
7. What is Event Delegation in JavaScript? Why is it useful?

   Ans: Child handle to add event lisner in parent element.
   useful: Don't have to add lot of listerner in element.
   It work dynamicly in element.



9. What is the difference between preventDefault() and stopPropagation() methods?
    
   Ans: preventDefault() use for of the browser default behaviour.
        stopPropagation() use for of the bubbling or event parent access.
