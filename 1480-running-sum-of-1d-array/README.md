<h2><a href="https://leetcode.com/problems/running-sum-of-1d-array/">1480. Running Sum of 1d Array</a></h2><h3>Easy</h3><hr><div style="pointer-events: auto;"><p style="pointer-events: auto;">Given an array <code>nums</code>. We define a running sum of an array as&nbsp;<code style="pointer-events: auto;">runningSum[i] = sum(nums[0]…nums[i])</code>.</p>

<p style="pointer-events: auto;">Return the running sum of <code style="pointer-events: auto;">nums</code>.</p>

<p style="pointer-events: auto;">&nbsp;</p>
<p style="pointer-events: auto;"><strong>Example 1:</strong></p>

<pre style="pointer-events: auto;"><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> [1,3,6,10]
<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].</pre>

<p><strong>Example 2:</strong></p>

<pre style="pointer-events: auto;"><strong>Input:</strong> nums = [1,1,1,1,1]
<strong>Output:</strong> [1,2,3,4,5]
<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,1,2,10,1]
<strong>Output:</strong> [3,4,6,16,17]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>-10^6&nbsp;&lt;= nums[i] &lt;=&nbsp;10^6</code></li>
</ul></div>