import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-vWCypcsz.js";const p={},o=t(`<h2 id="单向环形链表应用场景" tabindex="-1"><a class="header-anchor" href="#单向环形链表应用场景" aria-hidden="true">#</a> 单向环形链表应用场景</h2><figure><img src="https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401221356919.png" alt="环形链表" tabindex="0" loading="lazy"><figcaption>环形链表</figcaption></figure><blockquote><p><strong>Josephu(约瑟夫、约瑟夫环) 问题</strong></p><p>Josephu 问题为：设编号为 1，2，… n 的 n 个人围坐一圈，约定编号为 k（1&lt;=k&lt;=n）的人从1 开始报数，数到 m 的那个人出列，它的下一位又从 1 开始报数，数到 m 的那个人又出列，依次类推，直到所有人出列为止，由此产生一个出队编号的序列。</p><p><strong>例子：</strong></p><p>n=5 即有五个人</p><p>k=1 即从1号开始报数</p><p>m=2 即报数为2的出列</p><p>最后的顺序是 <strong>2-4-1-5-3</strong></p></blockquote><p><strong>约瑟夫问题解题思路：</strong></p><ul><li>使用环形链表来模拟</li><li>使用两个指针<strong>first</strong>和<strong>last</strong>分别表示第一个和最后一个</li><li><strong>first</strong>报数时移动到报数为<strong>m</strong>的位置，<strong>last</strong>移动到<strong>first</strong>的上一个位置也就是环形的队尾</li><li>然后出队删除<strong>first</strong>所在位置，同时将<strong>first</strong>指向下一个位置（在这个位置重新报数），同时将<strong>last</strong>的next指向<strong>first</strong>，使得始终维持一个环形队列</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="初始化节点" tabindex="-1"><a class="header-anchor" href="#初始化节点" aria-hidden="true">#</a> 初始化节点</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Boy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> no<span class="token punctuation">;</span><span class="token comment">//编号</span>
    <span class="token keyword">public</span> <span class="token class-name">Boy</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">=</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化环形链表" tabindex="-1"><a class="header-anchor" href="#初始化环形链表" aria-hidden="true">#</a> 初始化环形链表</h3><blockquote><p>初始化第一个节点为<strong>first</strong>为空，然后<em>addBoy</em>用于构建环形队列</p><p>当<strong>i==1</strong>时候，将<strong>first</strong>赋值为编号1的Boy，并且创建尾节点<strong>last</strong>使得<strong>last.next=first</strong>保持环形</p><p>其余节点类似，但始终保持最后一个节点的next为<strong>first</strong>节点</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">CircleSingleLinkedList</span> <span class="token punctuation">{</span>
    <span class="token comment">//第一个节点</span>
    <span class="token keyword">private</span> <span class="token class-name">Boy</span> first <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//添加小孩节点，构建环形链表（nums个小孩）</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addBoy</span><span class="token punctuation">(</span><span class="token keyword">int</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;nums值不正确&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Boy</span> last <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//辅助指针 用于构建环形链表 总是指向尾节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//根据编号创建小孩节点</span>
            <span class="token class-name">Boy</span> boy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//第一个节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//1</span>
                first <span class="token operator">=</span> boy<span class="token punctuation">;</span>
                first<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span> <span class="token comment">//构成环</span>
                last <span class="token operator">=</span> first<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//1-2</span>
                last<span class="token punctuation">.</span>next <span class="token operator">=</span> boy<span class="token punctuation">;</span>
                <span class="token comment">//1-2-1</span>
                boy<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span>
                last <span class="token operator">=</span> boy<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历所有节点" tabindex="-1"><a class="header-anchor" href="#遍历所有节点" aria-hidden="true">#</a> 遍历所有节点</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链表为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//辅助指针</span>
        <span class="token class-name">Boy</span> cur <span class="token operator">=</span> first<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;编号：&quot;</span> <span class="token operator">+</span> cur<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;遍历完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报数出队" tabindex="-1"><a class="header-anchor" href="#报数出队" aria-hidden="true">#</a> 报数出队</h3><blockquote><p>和上面解题思路一样 环形队列1-2-3-4-5-1</p><ol><li>得到<strong>first</strong>和<strong>last</strong>指针表示环形队列队头和队尾（即第一个报数的人和最后一个报数的人）例如从1号开始报数，则<strong>first=1，last=5</strong></li><li>报<strong>m</strong>则移动<strong>m-1</strong>位置因为本身得报一个数，例如<strong>m=2</strong>，则第一个出队的将是2号，此时<strong>first</strong>和<strong>last</strong>都移动<strong>1</strong>位，<strong>first=2，last=1</strong></li><li>2号出队，则从3号重新报数，则<strong>first=3，lsat=1</strong>必须指向3才可以位置环形队列，所以<strong>last.next=first</strong></li></ol></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">startNo</span>  表示从第几个小孩开始数数
     * <span class="token keyword">@param</span> <span class="token parameter">countNum</span> 表示数几下
     * <span class="token keyword">@param</span> <span class="token parameter">nums</span>     表示初始有几个小孩
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">countBoy</span><span class="token punctuation">(</span><span class="token keyword">int</span> startNo<span class="token punctuation">,</span> <span class="token keyword">int</span> countNum<span class="token punctuation">,</span> <span class="token keyword">int</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//数据校验</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> startNo <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> startNo <span class="token operator">&gt;</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入数据不正确！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Boy</span> last <span class="token operator">=</span> first<span class="token punctuation">;</span> <span class="token comment">//辅助指针 指向尾节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">.</span>next <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//报数前先移动startNo - 1次（因为本身已经在第一位了）</span>
        <span class="token comment">//比如刚开始last=5 first=1  startNo=1</span>
        <span class="token comment">//那我们先将last和first移动startNo-1位</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> startNo <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//报数时，移动countNum-1次 因为本身（last、first）自己也的报数一次</span>
        <span class="token comment">//假设countNum=2，那么报两次 则第一个出圈是2（报数1、2）下次一次从3开始报数</span>
        <span class="token comment">//刚开始last=5 first=1</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//说明只剩下最后一个节点</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> countNum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//此时first=2</span>
                last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//此时last=1</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出圈：&quot;</span> <span class="token operator">+</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//first指向的2出圈</span>
            first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">//此时first=3</span>
            last<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span><span class="token comment">//此时last=1-&gt;first=3</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最后存留的编号：&quot;</span> <span class="token operator">+</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Josephu</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CircleSingleLinkedList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CircleSingleLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">addBoy</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5个小孩</span>
        list<span class="token punctuation">.</span><span class="token function">showBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">countBoy</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果 24153</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CircleSingleLinkedList</span> <span class="token punctuation">{</span>
    <span class="token comment">//第一个节点</span>
    <span class="token keyword">private</span> <span class="token class-name">Boy</span> first <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//添加小孩节点，构建环形链表（nums个小孩）</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addBoy</span><span class="token punctuation">(</span><span class="token keyword">int</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;nums值不正确&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Boy</span> last <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//辅助指针 用于构建环形链表 总是指向尾节点</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//根据编号创建小孩节点</span>
            <span class="token class-name">Boy</span> boy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//第一个节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//1</span>
                first <span class="token operator">=</span> boy<span class="token punctuation">;</span>
                first<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span> <span class="token comment">//构成环</span>
                last <span class="token operator">=</span> first<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//1-2</span>
                last<span class="token punctuation">.</span>next <span class="token operator">=</span> boy<span class="token punctuation">;</span>
                <span class="token comment">//1-2-1</span>
                boy<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span>
                last <span class="token operator">=</span> boy<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;链表为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//辅助指针</span>
        <span class="token class-name">Boy</span> cur <span class="token operator">=</span> first<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;编号：&quot;</span> <span class="token operator">+</span> cur<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;遍历完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">startNo</span>  表示从第几个小孩开始数数
     * <span class="token keyword">@param</span> <span class="token parameter">countNum</span> 表示数几下
     * <span class="token keyword">@param</span> <span class="token parameter">nums</span>     表示初始有几个小孩
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">countBoy</span><span class="token punctuation">(</span><span class="token keyword">int</span> startNo<span class="token punctuation">,</span> <span class="token keyword">int</span> countNum<span class="token punctuation">,</span> <span class="token keyword">int</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//数据校验</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> startNo <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> startNo <span class="token operator">&gt;</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入数据不正确！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Boy</span> last <span class="token operator">=</span> first<span class="token punctuation">;</span> <span class="token comment">//辅助指针 指向尾节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">.</span>next <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//报数前先移动startNo - 1次（因为本身已经在第一位了）</span>
        <span class="token comment">//比如刚开始last=5 first=1  startNo=1</span>
        <span class="token comment">//那我们先将last和first移动startNo-1位</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> startNo <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//报数时，移动countNum-1次 因为本身（last、first）自己也的报数一次</span>
        <span class="token comment">//假设countNum=2，那么报两次 则第一个出圈是2（报数1、2）下次一次从3开始报数</span>
        <span class="token comment">//刚开始last=5 first=1</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//说明只剩下最后一个节点</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> countNum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//此时first=2</span>
                last <span class="token operator">=</span> last<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//此时last=1</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出圈：&quot;</span> <span class="token operator">+</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//first指向出圈</span>
            first <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">//此时first=3</span>
            last<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span><span class="token comment">//此时last=1-&gt;first=3</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最后存留的编号：&quot;</span> <span class="token operator">+</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Boy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> no<span class="token punctuation">;</span><span class="token comment">//编号</span>
    <span class="token keyword">public</span> <span class="token class-name">Boy</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token keyword">int</span> no<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>no <span class="token operator">=</span> no<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","josephu.html.vue"]]);export{k as default};
