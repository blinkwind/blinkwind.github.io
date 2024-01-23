import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-vWCypcsz.js";const p={},e=t(`<h2 id="队列介绍" tabindex="-1"><a class="header-anchor" href="#队列介绍" aria-hidden="true">#</a> 队列介绍</h2><ul><li>队列是一个有序列表，可以用<strong>数组</strong>或是<strong>链表</strong>来实现</li><li>遵循<strong>先入先出</strong>的原则。即：先存入队列的数据，要先取出，后存入的要后取出</li><li>示意图：(使用数组模拟队列示意图)， 如饭店排号系统，先来先排，轮到你你先吃，晚来的继续排队，叫到号才可以吃</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401201554314.png" alt="示意图" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><h2 id="数组模拟队列思路" tabindex="-1"><a class="header-anchor" href="#数组模拟队列思路" aria-hidden="true">#</a> 数组模拟队列思路</h2><ul><li><p>队列本身是有序列表，若使用数组的结构来存储队列的数据，则队列数组的声明如上图, 其中<strong>maxSize</strong> 是该队列的最大容量</p></li><li><p>因为队列的输出、输入是分别从前后端来处理，因此需要两个变量 <strong>front</strong> 及 <strong>rear</strong> 分别记录队列前后端的下标</p></li><li><p><strong>front</strong> 会随着数据输出而改变，而 <strong>rear</strong> 则是随着数据输入而改变</p></li><li><p>当我们将数据存入队列时称为<strong>addQueue</strong>，<strong>addQueue</strong> 的处理需要有以下几个步骤：</p><blockquote><p>将尾指针往后移：<strong>rear+1</strong></p><p>当队列空： <strong>front == rear</strong></p><p>若尾指针 <strong>rear</strong> 小于队列的最大下标 <strong>maxSize-1</strong>，则将数据存入 <strong>rear</strong> 所指的数组元素中，否则无法存入数据，即队列满：<strong>rear == maxSize - 1</strong></p></blockquote></li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span> <span class="token comment">//数组最大容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> front<span class="token punctuation">;</span> <span class="token comment">//头指针</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> rear<span class="token punctuation">;</span> <span class="token comment">//尾指针</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span> <span class="token comment">//队列存储</span>

    <span class="token comment">//初始化队列</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//指向队列头的前一个位置（规约）</span>
        rear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//指向队列最后一个数据（规约）</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>头指针<strong>front</strong>指向队列头的前一个位置</li><li>尾指针<strong>rear</strong>指向最后一个数据</li></ol><h3 id="队空" tabindex="-1"><a class="header-anchor" href="#队空" aria-hidden="true">#</a> 队空</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">//队列空 rear == front</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rear <span class="token operator">==</span> front<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队满" tabindex="-1"><a class="header-anchor" href="#队满" aria-hidden="true">#</a> 队满</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token comment">//队列满 rear == maxSize - 1</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rear <span class="token operator">==</span> maxSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加数据-入队" tabindex="-1"><a class="header-anchor" href="#添加数据-入队" aria-hidden="true">#</a> 添加数据（入队）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//添加数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队满</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列满不能再继续添加！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        rear<span class="token operator">++</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="出队" tabindex="-1"><a class="header-anchor" href="#出队" aria-hidden="true">#</a> 出队</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//出队列</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        front<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示队列头数据-不取出" tabindex="-1"><a class="header-anchor" href="#显示队列头数据-不取出" aria-hidden="true">#</a> 显示队列头数据（不取出）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//显示队列头数据（不取出）</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">headQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ArrayQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span> <span class="token comment">//数组最大容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> front<span class="token punctuation">;</span> <span class="token comment">//头指针</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> rear<span class="token punctuation">;</span> <span class="token comment">//尾指针</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">;</span> <span class="token comment">//队列存储</span>

    <span class="token comment">//初始化队列</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>maxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//指向队列头的前一个位置（规约）</span>
        rear <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//指向队列最后一个数据（规约）</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//队列满 rear == maxSize - 1</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rear <span class="token operator">==</span> maxSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
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
        rear<span class="token operator">++</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//出队列</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        front<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//显示所有数据</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> rear<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//显示队列头数据（不取出）</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">headQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//判断队空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;队列为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">[</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayQueue</span> arrayQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayQueue</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> head <span class="token operator">=</span> arrayQueue<span class="token punctuation">.</span><span class="token function">headQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;队列首部数据：&quot;</span> <span class="token operator">+</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">addQueue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> arrayQueue<span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出队：&quot;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">showQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题及解决方案" tabindex="-1"><a class="header-anchor" href="#问题及解决方案" aria-hidden="true">#</a> 问题及解决方案</h2><ul><li>目前数组使用一次就不能用， 没有达到复用的效果</li><li>将这个数组使用算法，改进成一个<strong>环形的队列</strong> 取模：%</li></ul>`,23),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","arrayqueue.html.vue"]]);export{k as default};