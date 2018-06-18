webpackJsonp([1579769163079],{1135:function(s,n){s.exports={data:{site:{siteMetadata:{docsDirectory:"docs",github:{url:"https://github.com/n6g7/redux-saga-firebase"}}},file:{base:"multiple-apps.md",sourceInstanceName:"guides",markdown:{html:'<p>Initializing multiple firebase apps and using them simultaneously with RSF is really easy.</p>\n<p>The first step is to initialize the <a href="https://firebase.google.com/docs/reference/js/firebase.app.App">firebase.app.App</a> instances themselves. This is well documented <a href="https://firebase.google.com/docs/web/setup#initialize_multiple_apps">on the firebase docs website</a> (which you should go and read right now if you haven\'t already 🙂) but here is a summary:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Initializing the [DEFAULT] app (without a name):</span>\n<span class="token keyword">const</span> defaultApp <span class="token operator">=</span> firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  apiKey<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  authDomain<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  databaseURL<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  projectId<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  storageBucket<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  messagingSenderId<span class="token punctuation">:</span> <span class="token string">\'...\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Initializing named apps:</span>\n<span class="token keyword">const</span> otherApp1 <span class="token operator">=</span> firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>app1Config<span class="token punctuation">,</span> <span class="token string">\'other1\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> otherApp2 <span class="token operator">=</span> firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>app2Config<span class="token punctuation">,</span> <span class="token string">\'other2\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>The default app is accessible directly from the <code class="language-text">firebase</code> object:</p>\n<ul>\n<li><code class="language-text">firebase.database()</code> is the same as <code class="language-text">defaultApp.database()</code></li>\n<li><code class="language-text">firebase.auth()</code> is the same as <code class="language-text">defaultApp.auth()</code></li>\n<li>etc...</li>\n</ul>\n<p>This behavious can get really confusing when using multiple apps so try not to use the <code class="language-text">firebase</code> object and instead use the retuned app (<code class="language-text">defaultApp</code>) in your code. That it\'s clear which app is being used. :)</p>\n<p>Now that we have several app instances, using them with RSF is as easy as calling the <code class="language-text">ReduxSagaFirebase</code> constructor on each of them:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> rsfDefault <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReduxSagaFirebase</span><span class="token punctuation">(</span>defaultApp<span class="token punctuation">)</span>\n<span class="token keyword">const</span> rsf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReduxSagaFirebase</span><span class="token punctuation">(</span>otherApp1<span class="token punctuation">)</span>\n<span class="token keyword">const</span> rsf2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReduxSagaFirebase</span><span class="token punctuation">(</span>otherApp2<span class="token punctuation">)</span>\n\n<span class="token comment">// And then in your sagas:</span>\n<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">saga</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 👇Login the user using project1</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>\n    rsf1<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>loginWithPopup<span class="token punctuation">,</span>\n    provider\n  <span class="token punctuation">)</span>\n  <span class="token comment">// 👇Save data in project2</span>\n  <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>\n    rsf2<span class="token punctuation">.</span>firestore<span class="token punctuation">.</span> setDocument<span class="token punctuation">,</span>\n    <span class="token string">\'collection/document\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> user <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>See <a href="https://github.com/n6g7/redux-saga-firebase/issues/98">issue #98</a> for more details.</p>',frontmatter:{title:"Working with multiple apps"}}}},pathContext:{fileName:"multiple-apps"}}}});
//# sourceMappingURL=path---guides-multiple-apps-a038a6a8dd1d88c85c3c.js.map