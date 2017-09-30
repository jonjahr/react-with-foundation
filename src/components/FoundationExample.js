import React from 'react';

const FoundationExample = () => {
	return (
	  <div id="foundation">
	    <div className="grid-container">
	      <div className="grid-x grid-padding-x">
	        <div className="large-12 cell">
	          <h1>Welcome to Foundation</h1>
	        </div>
	      </div>

	      <div className="grid-x grid-padding-x">
	        <div className="large-12 cell">
	          <div className="callout">
	            <h3>We&rsquo;re stoked you want to try Foundation! </h3>
	            <p>To get going, this file (index.html) includes some basic styles you can modify, play around with, or totally destroy to get going.</p>
	            <p>Once you've exhausted the fun in this document, you should check out:</p>
	            <div className="grid-x grid-padding-x">
	              <div className="large-4 medium-4 cell">
	                <p><a href="http://foundation.zurb.com/docs">Foundation Documentation</a><br />Everything you need to know about using the framework.</p>
	              </div>
	              <div className="large-4 medium-4 cell">
	                <p><a href="http://zurb.com/university/code-skills">Foundation Code Skills</a><br />These online courses offer you a chance to better understand how Foundation works and how you can master it to create awesome projects.</p>
	              </div>
	              <div className="large-4 medium-4 cell">
	                <p><a href="http://foundation.zurb.com/forum">Foundation Forum</a><br />Join the Foundation community to ask a question or show off your knowlege.</p>
	              </div>
	            </div>
	            <div className="grid-x grid-padding-x">
	              <div className="large-4 medium-4 medium-push-2 cell">
	                <p><a href="http://github.com/zurb/foundation">Foundation on Github</a><br />Latest code, issue reports, feature requests and more.</p>
	              </div>
	              <div className="large-4 medium-4 medium-pull-2 cell">
	                <p><a href="https://twitter.com/ZURBfoundation">@zurbfoundation</a><br />Ping us on Twitter if you have questions. When you build something with this we'd love to see it (and send you a totally boss sticker).</p>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div className="grid-x grid-padding-x">
	        <div className="large-8 medium-8 cell">
	          <h5>Here&rsquo;s your basic grid:</h5>

	          <div className="grid-x grid-padding-x">
	            <div className="large-12 cell">
	              <div className="primary callout">
	                <p><strong>This is a twelve cell section in a grid-x.</strong> Each of these includes a div.callout element so you can see where the cell are - it's not required at all for the grid.</p>
	              </div>
	            </div>
	          </div>
	          <div className="grid-x grid-padding-x">
	            <div className="large-6 medium-6 cell">
	              <div className="primary callout">
	                <p>Six cell</p>
	              </div>
	            </div>
	            <div className="large-6 medium-6 cell">
	              <div className="primary callout">
	                <p>Six cell</p>
	              </div>
	            </div>
	          </div>
	          <div className="grid-x grid-padding-x">
	            <div className="large-4 medium-4 small-4 cell">
	              <div className="primary callout">
	                <p>Four cell</p>
	              </div>
	            </div>
	            <div className="large-4 medium-4 small-4 cell">
	              <div className="primary callout">
	                <p>Four cell</p>
	              </div>
	            </div>
	            <div className="large-4 medium-4 small-4 cell">
	              <div className="primary callout">
	                <p>Four cell</p>
	              </div>
	            </div>
	          </div>

	          <hr />

	          <h5>We bet you&rsquo;ll need a form somewhere:</h5>
	          <form action="">

	            <div className="grid-x grid-padding-x">
	              <div className="large-12 cell">
	                <label>Input Label</label>
	                <input type="text" placeholder="large-12.cell" />
	              </div>
	            </div>
	            
	            <div className="grid-x grid-padding-x">
	              <div className="large-4 medium-4 cell">
	                <label>Input Label</label>
	                <input type="text" placeholder="large-4.cell" />
	              </div>
	              <div className="large-4 medium-4 cell">
	                <label>Input Label</label>
	                <input type="text" placeholder="large-4.cell" />
	              </div>
	              <div className="large-4 medium-4 cell">
	                <div className="grid-x">
	                  <label>Input Label</label>
	                  <div className="input-group">
	                    <input type="text" placeholder="small-9.cell" className="input-group-field" />
	                    <span className="input-group-label">.com</span>
	                  </div>
	                </div>
	              </div>
	            </div>

	            <div className="grid-x grid-padding-x">
	              <div className="large-12 cell">
	                <label>Select Box</label>
	                <select>
	                  <option value="husker">Husker</option>
	                  <option value="starbuck">Starbuck</option>
	                  <option value="hotdog">Hot Dog</option>
	                  <option value="apollo">Apollo</option>
	                </select>
	              </div>
	            </div>

	            <div className="grid-x grid-padding-x">
	              <div className="large-6 medium-6 cell">
	                <label>Choose Your Favorite</label>
	                <label htmlFor="pokemonRed">Radio 1</label>
	                <input type="radio" name="pokemon" value="Red" id="pokemonRed"></input>
	                <label htmlFor="pokemonBlue">Radio 2</label>
	                <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"></input>
	              </div>
	              <div className="large-6 medium-6 cell">
	                <label>Check these out</label>
	                <label htmlFor="checkbox1">Checkbox 1</label>
	                <input id="checkbox1" type="checkbox"></input>
	                <label htmlFor="checkbox2">Checkbox 2</label>
	                <input id="checkbox2" type="checkbox"></input>
	              </div>
	            </div>

	            <div className="grid-x grid-padding-x">
	              <div className="large-12 cell">
	                <label>Textarea Label</label>
	                <textarea placeholder="small-12.cell"></textarea>
	              </div>
	            </div>

	          </form>
	        </div>

	        <div className="large-4 medium-4 cell">
	          <h5>Try one of these buttons:</h5>
	          <p><a href="#" className="button">Simple Button</a><br/>
	          <a href="#" className="success button">Success Btn</a><br/>
	          <a href="#" className="alert button">Alert Btn</a><br/>
	          <a href="#" className="secondary button">Secondary Btn</a></p>
	          <div className="callout">
	            <h5>So many components, girl!</h5>
	            <p>A whole kitchen sink of goodies comes with Foundation. Check out the docs to see them all, along with details on making them your own.</p>
	            <a href="http://foundation.zurb.com/sites/docs/" className="small button">Go to Foundation Docs</a>
	          </div>
	        </div>
	      </div>
	    </div>

	  </div>
	)
}

export default FoundationExample;
