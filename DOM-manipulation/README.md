<img src="https://www.w3schools.com/js/pic_htmltree.gif" alt="">
DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

## Changing Styles

style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

## It is important to CACHE selectors in variables

## if inline statement

<code>
input.value == "" ? alert("Please enter text") : li.appendChild(document.createTextNode(input.value)) && ul.appendChild(li);
</code>
Note: Callback Functions

In the previous video you saw something interesting:

Event listener syntax :

    button.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListAfterKeypress);

You didn't see the function being called like this as you may have expected:

    button.addEventListener("click", addListAfterClick());
    input.addEventListener("keypress", addListAfterKeypress(event));

This is something called a callback function. When that line of javascript runs, we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.
