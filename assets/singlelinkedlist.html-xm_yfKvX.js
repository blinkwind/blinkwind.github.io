const e=JSON.parse('{"key":"v-8bdcdcca","path":"/article/algorithm/list/singlelinkedlist.html","title":"单链表","lang":"zh-CN","frontmatter":{"title":"单链表","lang":"zh-CN","description":"单链表","category":"链表","date":"2024-01-20T17:11:00.000Z","tags":"链表","head":[["meta",{"property":"og:url","content":"https://blinkwind.github.io/article/algorithm/list/singlelinkedlist.html"}],["meta",{"property":"og:site_name","content":"Bug Workshop"}],["meta",{"property":"og:title","content":"单链表"}],["meta",{"property":"og:description","content":"单链表"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"倚栏听风"}],["meta",{"property":"article:published_time","content":"2024-01-20T17:11:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单链表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-20T17:11:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"倚栏听风\\",\\"url\\":\\"https://github.com/blinkwind\\",\\"email\\":\\"1845706088@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"链表介绍","slug":"链表介绍","link":"#链表介绍","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":3,"title":"Node节点","slug":"node节点","link":"#node节点","children":[]},{"level":3,"title":"单链表初始化","slug":"单链表初始化","link":"#单链表初始化","children":[]},{"level":3,"title":"顺序添加节点","slug":"顺序添加节点","link":"#顺序添加节点","children":[]},{"level":3,"title":"根据Age大小插入节点","slug":"根据age大小插入节点","link":"#根据age大小插入节点","children":[]},{"level":3,"title":"根据Age删除节点","slug":"根据age删除节点","link":"#根据age删除节点","children":[]},{"level":3,"title":"根据Age修改节点","slug":"根据age修改节点","link":"#根据age修改节点","children":[]}]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[{"level":3,"title":"获取链表有效节点个数（去除头节点） 新浪面试题","slug":"获取链表有效节点个数-去除头节点-新浪面试题","link":"#获取链表有效节点个数-去除头节点-新浪面试题","children":[]},{"level":3,"title":"获取倒数K个节点  新浪面试题","slug":"获取倒数k个节点-新浪面试题","link":"#获取倒数k个节点-新浪面试题","children":[]},{"level":3,"title":"数组反转 1-2-3 变成3-2-1 腾讯面试题","slug":"数组反转-1-2-3-变成3-2-1-腾讯面试题","link":"#数组反转-1-2-3-变成3-2-1-腾讯面试题","children":[]},{"level":3,"title":"逆序打印 百度面试题","slug":"逆序打印-百度面试题","link":"#逆序打印-百度面试题","children":[]}]},{"level":2,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}],"git":{},"readingTime":{"minutes":6.38,"words":1913},"filePathRelative":"article/algorithm/list/singlelinkedlist.md","localizedDate":"2024年1月21日","excerpt":"<h2> 链表介绍</h2>\\n<p>链表是有序的列表，但是它在内存中是存储如下（没学过操作系统可以忽略）：</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401201713659.png\\" alt=\\"实际内存存储结构\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>实际内存存储结构</figcaption></figure>\\n<ul>\\n<li>\\n<p>链表是以节点的方式来存储，是<strong>链式存储</strong></p>\\n</li>\\n<li>\\n<p>每个节点包含 <strong>data</strong> 域：存储数据 &nbsp;&nbsp;&nbsp; <strong>next</strong> 域：指向下一个节点</p>\\n</li>\\n<li>\\n<p>如图：发现链表的各个节点不一定是连续存储（没学过操作系统可以忽略）</p>\\n</li>\\n<li>\\n<p>链表分<strong>带头节点</strong>的链表和<strong>没有头节点</strong>的链表，根据实际的需求来确定</p>\\n</li>\\n<li>\\n<p>单链表(<strong>带头结点</strong>) 逻辑结构示意图如下</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401201716888.png\\" alt=\\"简略图\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>简略图</figcaption></figure>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/blinkwind/images/blog/202401221312720.png\\" alt=\\"详细图\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>详细图</figcaption></figure>\\n<blockquote>\\n<p>即一个完整的链表通常包括 head-&gt;node-&gt;node-&gt;node</p>\\n<p>其中head不存储信息 每个node包括data和next</p>\\n</blockquote>\\n</li>\\n</ul>"}');export{e as data};