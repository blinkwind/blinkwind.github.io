import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p}from"./app-vWCypcsz.js";const t={},e=p(`<blockquote><p>对前面的数组模拟队列的优化，充分利用数组，因此将数组看做是一个环形的。(通过<strong>取模</strong>的方式来实现即可)</p></blockquote><h2 id="分析说明" tabindex="-1"><a class="header-anchor" href="#分析说明" aria-hidden="true">#</a> 分析说明</h2><ul><li><p>尾索引的下一个为头索引时表示队列满，因为将<strong>队列容量空出一个作为约定</strong>（<strong>rear</strong>指向最后一个数据后一个位置），这个在做判断<strong>队列满</strong>的时候需要注意</p><p><strong>(rear + 1) % maxSize == front</strong></p></li><li><p>队列空：<strong>rear == front</strong></p></li><li><p>示意图</p></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401201626258.png" alt="示意图" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><blockquote><ol><li><strong>front</strong>不再指向队列头部数据前一个位置，而是指向头一个数据，初始化为0</li><li><strong>rear</strong>不再指向队列尾部数据，而是指向尾部数据下一个位置，初始化为0</li><li>队满： <strong>(rear + 1) % maxSize == front</strong></li><li>队空：<strong>rear == front</strong></li><li>队列中数据个数：<strong>（rear + maxSize - front）% maxSize</strong></li></ol></blockquote><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span> <span class="token comment">//数组最大容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> front<span class="token punctuation">;</span> <span class="token comment">//头指针 指向队列第一个数据</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> rear<span class="token punctuation">;</span> <span class="token comment">//尾指针  指向队列最后一个数据的后一个位置</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span> <span class="token comment">//队列存储</span>

    <span class="token keyword">public</span> <span class="token class-name">CircleArrayQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//指向队列头的位置（规约）</span>
        rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//指向队列最后一个数据的后一个位置（规约）</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队空" tabindex="-1"><a class="header-anchor" href="#队空" aria-hidden="true">#</a> 队空</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//队列空 rear == front</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rear <span class="token operator">==</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队满" tabindex="-1"><a class="header-anchor" href="#队满" aria-hidden="true">#</a> 队满</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//队列满 (rear + 1) % maxSize == front</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize <span class="token operator">==</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> 添加数据</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//添加数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列满不能再继续添加！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
        <span class="token comment">//后移</span>
        rear <span class="token operator">=</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="出队" tabindex="-1"><a class="header-anchor" href="#出队" aria-hidden="true">#</a> 出队</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//出队列</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> arr<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//后移</span>
        front <span class="token operator">=</span> <span class="token punctuation">(</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有效数据个数" tabindex="-1"><a class="header-anchor" href="#有效数据个数" aria-hidden="true">#</a> 有效数据个数</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//队列有效数据个数</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> maxSize <span class="token operator">-</span> front<span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CircleArrayQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span> <span class="token comment">//数组最大容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> front<span class="token punctuation">;</span> <span class="token comment">//头指针 指向队列第一个数据</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> rear<span class="token punctuation">;</span> <span class="token comment">//尾指针  指向队列最后一个数据的后一个位置</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span> <span class="token comment">//队列存储</span>

    <span class="token keyword">public</span> <span class="token class-name">CircleArrayQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        front <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//指向队列头的位置（规约）</span>
        rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//指向队列最后一个数据的后一个位置（规约）</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//队列满 (rear + 1) % maxSize == front</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize <span class="token operator">==</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//队列空 rear == front</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rear <span class="token operator">==</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//添加数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列满不能再继续添加！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
        <span class="token comment">//后移</span>
        rear <span class="token operator">=</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//出队列</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> arr<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//后移</span>
        front <span class="token operator">=</span> <span class="token punctuation">(</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//显示所有数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> front<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> front <span class="token operator">+</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> index <span class="token operator">=</span> i <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//队列有效数据个数</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>rear <span class="token operator">+</span> maxSize <span class="token operator">-</span> front<span class="token punctuation">)</span> <span class="token operator">%</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//显示队列头数据（不取出）</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">headQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CircleArrayQueue</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CircleArrayQueue</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//最多装3个数据 留下一个空位</span>
        queue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> head <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">headQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列首部数据：&quot;</span> <span class="token operator">+</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出队：&quot;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","circlearrayqueue.html.vue"]]);export{k as default};
