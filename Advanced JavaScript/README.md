## Advanced JavaScript >> LET and CONST

<p><strong>var myVariableName = myVariableValue&nbsp; ( </strong>var (keyword) + myVariableName (this is up to us, whatever we want the variable to be called) + myVariableValue (the value that we assign) <strong>)</strong>.</p>
<p><strong>// example :</strong></p>
<p>var name = “Lena”;<br>
var age = 2;<br>
var isAdorable = true;</p>
<p>So now, whenever we ask for age, its going to give us 2. All JavaScript variables must be unique names, witch are called identifiers. In this case that is age.</p>
<p><em>The following<strong> rules</strong> apply to variable names:</em><br>
-all variables names must be unique, and can not be duplicate.<br>
-can not contain spaces<br>
-can contain letters, digits, underscores, and dollar signs.<br>
-are case sensitive (Q and q are different variables).<br>
-reserved words (like JavaScript keywords) cannot be used as names.<br>
-ending with a period should be avoided, since the period may be interpreted as a command terminator.</p>
<ul>
<li style="text-align: left;"><strong>// Valid</strong><br>
var name;<br>
var age3;<br>
var blackDog; // Suggested method named camel case</li>
<li style="text-align: left;"><strong>// Invalid</strong><br>
var 1boy;<br>
var -boy;</li>
</ul>
<p>In ES2015, two other ways to declare variables were introduced. They are let and const.</p>
<ul>
<li>The <strong>let&nbsp;</strong>keyword allows a new variable to be assigned within the scope of a function or loop while not changing a variable that uses the same name that is outside of the scope of that function or loop. Let is usable in instances where the variable is going to be reassigned.</li>
<li>The <strong>const&nbsp; </strong>keyword does&nbsp;<strong class="gb hl"><em class="hm">not&nbsp;</em></strong>allow a variable name to be reused anywhere within your code. This means that if you assign a variable a name using the const keyword later on you cannot reset that variable to be equal to something else.</li>
