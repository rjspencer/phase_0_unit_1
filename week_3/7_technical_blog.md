[Week 3 Home](./)

# U1.W3: Technical Blog

## Learning Competencies
- Summarize the popularity of JavaScript in Web Development

## Release 0: Create your file
Create a new HTML file and use the date to name it `week3_technical.html`. 

## Release 1: Research
Research the following question:

#### Why is JavaScript so popular in web development?

## Release 2: Blog!

Write about what you learned during your research. There is no length requirement, but you should write your blog for a non-technical audience that shows off your understanding of the material.

## Release 3: Submit
Link to your blog on the index of your github.io site and sync your changes. 

Share your blog on the google+ community under "Blog Posts!" Read others' posts and see if you agree or disagree. Start a discussion on this topic.  Consider sharing your blog post on Reddit as well.

<div class="compare_left">
	<span class="compare_heading">JavaScript</span>
	<ul class="compare_list">
		<li class="compare_draw">
			<h4>Client-side</h4>
			<p>The original code is sent from the server to the user.  The user's computer then processes all of the code.</p>
		</li>
		<li class="compare_draw">
			<h4>Code Complexity</h4>
			<p>Javascript shares a similiar code structure with Ruby.  As with most popular modern languages, they are both Object Oriented.</p>
		</li>
		<li class="compare_lose">
			<h4>Code Security</h4>
			<p>The original JavaScript code is sent to the user.  This means anyone can see all of the code you have written.  They can easily steal it or search it for flaws.</p>
		</li>
		<li class="compare_lose">
			<h4>Password Security</h4>
			<p>Nothing in JavaScript is a secret, that includes passwords <em>see above</em>.</p>
		</li>
		<li class="compare_draw">
			<h4>Speed - Loading</h4>
			<p>It depends.  By having the user's computer handle the difficult processing, the server has less to process.  However, the server may now have to send more data or the user's computer may be slow.</p>
		</li>
		<li class="compare_win">
			<h4>Speed - Page Changes</h4>
			<p>If enough data is sent with the original request, JavaScript can change the user's page without ever contacting the server for fantastic speed.  With a technique called AJAX, JavaScript can speed things up by asking the server for just the part of the page that needs to change instead of the whole thing.</p>
		</li>
		<li class="compare_win">
			<h4>DOM Manipulation</h4>
			<p>The Document Object Model (DOM) is a fancy way of refering to all the HTML tags in a page and the map that they create.  JavaScript, and its partner jQuery, offer the ability to alter HTML tags.  Examples include changing images, hiding and showing buttons, and creating animations.</p>
		</li>
		<li class="compare_win">
			<h4>Compatibility</h4>
			<p>Virtually every web connected device has JavaScript built in automatically.</p>
		</li>
	</ul>
</div>

<div class="compare_center">
	<span class="compare_heading"> </span>
	<ul class="compare_list">
		<li>Where It Runs</li>
		<li>Code Complexity</li>
		<li>Code Security</li>
		<li>Password Security</li>
		<li>Speed - Loading</li>
		<li>Speed - Page Changes</li>
		<li>Compatibility</li>
	</ul>
</div>
<div class="compare_right">
	<span class="compare_heading">Ruby</span>
	<ul class="compare_list">
		<li class="compare_draw">
			<h4>Server-side</h4>
			<p>The server processes the code and only sends the final product to the user.</p>
		</li>
		<li class="compare_draw">
			<h4>Code Complexity</h4>
			<p>Ruby shares a similiar code structure with Javascript.  As with most popular modern languages, they are both Object Oriented.</p>
		</li>
		<li class="compare_win">
			<h4>Code Security</h4>
			<p>Ruby is run on the server and the user only receives finished HTML + CSS, removing the opportunity to steal code.  Users don't even need to know the page was created in Ruby.</p>
		</li>
		<li class="compare_win">
			<h4>Password Security</h4>
			<p>Everything in Ruby is a secret if you want it to be, and that includes passwords <em>see above</em>.</p>
		</li>
		<li class="compare_draw">
			<h4>Speed - Loading</h4>
			<p>It depends.  Servers are usually powerful machines and may process faster than a user's computer, even when multiple users are requesting pages at the same time.  Or not.</p>
		</li>
		<li class="compare_draw">
			<h4>Speed - Page Changes</h4>
			<p>Every time something on a page needs to change, Ruby needs to resend the whole HTML file, though images and CSS can be cached if they do not change.  Ruby is, however, faster than some server-side languages like PHP.</p>
		</li>
		<li class="compare_lose">
			<h4>DOM Manipulation</h4>
			<p>Ruby can only generate the original DOM with the HTML page.  It has no ability to manipulate it.</p>
		</li>
		<li class="compare_draw">
			<h4>Compatibility</h4>
			<p>Ruby generates HTML that any web browser can use.  However, not all servers are prepared to run Ruby.  Ruby can be difficult to install on Windows servers.  Also, many shared hosting services do not currently support Ruby.  The good news is that the popularity of Ruby and the Rails framework are resulting in improvement on both fronts.</p>
		</li>
	</ul>
</div>
