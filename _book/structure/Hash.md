<!--
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-28 10:12:11
 -->
<h1>哈希表</h1>

哈希表是一种数据结构，它使用哈希函数组织数据，以支持快速插入和搜索。

## 哈希表的原理

哈希表的关键思想是使用哈希函数将键映射到存储桶。更确切地说，

* 当我们插入一个新的键时，哈希函数将决定该键应该分配到哪个桶中，并将该键存储在相应的桶中；
* 当我们想要搜索一个键时，哈希表将使用相同的哈希函数来查找对应的桶，并只在特定的桶中进行搜索；


## 设计Hash表的关键

### 1.哈希函数

当你存储数据时，不也不希望存储不同的值时，得到的却是一样结果，所以**哈希函数**的最终目标就是尽可以保证**一对一**的关系。

#### 2.冲突解决

理想情况下，如果我们的哈希函数是完美的一对一映射，我们将不需要处理冲突。不幸的是，在大多数情况下，冲突几乎是不可避免的。

例如，如果哈希函数（Output  =  Input ％ 5）中，7 和 2 都分配给了桶 2，这是一个冲突。

**冲突解决算法应该解决以下几个问题：**

* 如何组织在同一个桶中的值？
* 如果为同一个桶分配了太多的值，该怎么办？
* 如何在特定的桶中搜索目标值？
根据我们的哈希函数，这些问题与桶的容量和可能映射到同一个桶的键的数目有关。


