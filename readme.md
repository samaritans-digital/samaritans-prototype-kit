Samaritans Prototyping Kit
=====================

**This is in alpha at the moment and will probably change significantly before it's ready for general use.**

A minimal kit intended to make it easy to create interactive HTML prototypes.

Inspired by the great [GOV.UK prototyping kit](https://github.com/alphagov/govuk-prototype-kit).


Get started
-----------

Download a copy of this kit, and from a computer with `node` and `npm` installed, run the `npm install`.

To serve the kit, run `npm start`. You will be able to visit the prototypes at `localhost:3000` in your browser.

You should see the generic welcome page.

To start prototyping, go to the /src/views directory, create a new HTML file or overwrite an existing one, then start writing HTML.

See the wiki for a [list of available elements](https://github.com/samaritans-digital/samaritans-prototype-kit/wiki/List-of-supported-UI-elements).

Every view file needs to start out like this:

```
{% extends '_layout.html' %}
{% block content %}

<!-- Your HTML here -->

{% endblock %}
```

If you need a design element that isn't supplied, you can write CSS in the `custom.css` file in the /src/assets directory.

To do
-----

Many more UI elements need to be added before this will be useful:

* ~Grid system~
* ~Header with logo and nav~
* ~Footer with nav and info~
* ~Buttons and inline links~
* ~Headings~
* ~Paragraph text~
* ~Inset panel~
* ~Card/call-to-action~
* ~Accordion~
* Alerts/badges (square and round)
* Text input
* Select input
* Timeline/step-by-step UI
* Big number/stat
* Tabs