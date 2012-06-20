fixedNav
=========

### A jQuery plugin that fixates a horizontal navigation element as soon as it hits the top by scrolling

2012 by [Christian Doebler](http://www.christian-doebler.net/)


#### Examples

<pre>
$(".navigation").fixedNav();
</pre>

<pre>
$(".navigation")
    .fixedNav()
    .bind("relative", function() {
        console.log("relative");
    })
    .bind("fixed", function() {
        console.log("fixed");
    });
</pre>


#### Events

<pre>
relative : fired, when css position is set to relative (navigation moves on scrolling)
fixed    : fired, when css position is set to fixed (navigation fixated)
</pre>
