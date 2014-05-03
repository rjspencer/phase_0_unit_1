# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?

	Its often described as a tree, but I think an outline like how we learned to write english papers is a better analogy.

	I <div>
		A <div>
			1. <p>
				a. <a>
	
	The DOM took me a while to wrap my head around, luckily I did that a few months ago working through a jQuery book.  The parent/sibling/child relationships seem obvious now, but took me a bit to understand.  The DOM is simple and effective.  Its simplicity can make calls a bit confusing in a large page $(this).parent().parent().parent().child('p').closest('h3')

* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

My site has less stuff.  The Wordpress site did not minify and combine its JS files.


* Did you find Chrome Web Tools fun, helpful, or a pain to work with?

I like it for looking at other sites to see how they did that.  I like it for quick testing/debugging of a single element.  However, it seems that using it to make multiple changes is too cumbersome.  Saving locally takes too many steps when I can live edit in a text editor.  

The network tab is a simple powerful way to speed pageload.

* Did you have an "aha" moments or were any concepts solidified?
Brackets.io/Adobe Edge Code allows you to live code in a text editor and display immediate changes on chrome.  It must use an api to tie in to dev tools functionality (it only works with chrome).  

* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

stackoverflow.com