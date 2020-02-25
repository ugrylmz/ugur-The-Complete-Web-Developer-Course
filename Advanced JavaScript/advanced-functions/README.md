## Pure Functions

<p>
A pure function is a function which:

    Given the same input, will always return the same output.
    Produces no side effects.

</p>
A dead giveaway that a function is impure is if it makes sense to call it without using its return value. For pure functions, that’s a noop.
</br>
<p>Pure functions have many beneficial properties, and form the foundation of functional programming. Pure functions are completely independent of outside state, and as such, they are immune to entire classes of bugs that have to do with shared mutable state. Their independent nature also makes them great candidates for parallel processing across many CPUs, and across entire distributed computing clusters, which makes them essential for many types of scientific and resource-intensive computing tasks.</p>
<h2>
What are the two elements of a pure function?
</h2>
<ol>
<li> Deterministic --> always produces the same results given the same inputs
</li>
<li>
No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.</li>
</ol>
