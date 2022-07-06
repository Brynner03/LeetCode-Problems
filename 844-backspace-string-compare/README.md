<h2><a href="https://leetcode.com/problems/backspace-string-compare/">844. Backspace String Compare</a></h2><h3>Easy</h3><hr><div style="pointer-events: auto;"><p style="pointer-events: auto;">Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em style="pointer-events: auto;">if they are equal when both are typed into empty text editors</em>. <code>'#'</code> means a backspace character.</p>

<p style="pointer-events: auto;">Note that after backspacing an empty text, the text will continue empty.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "ab#c", t = "ad#c"
<strong>Output:</strong> true
<strong>Explanation:</strong> Both s and t become "ac".
</pre>

<p><strong>Example 2:</strong></p>

<pre style="pointer-events: auto;"><strong>Input:</strong> s = "ab##", t = "c#d#"
<strong>Output:</strong> true
<strong>Explanation:</strong> Both s and t become "".
</pre>

<p style="pointer-events: auto;"><strong>Example 3:</strong></p>

<pre style="pointer-events: auto;"><strong>Input:</strong> s = "a#c", t = "b"
<strong>Output:</strong> false
<strong>Explanation:</strong> s becomes "c" while t becomes "b".
</pre>

<p style="pointer-events: auto;">&nbsp;</p>
<p style="pointer-events: auto;"><strong>Constraints:</strong></p>

<ul style="pointer-events: auto;">
	<li style="pointer-events: auto;"><code><span>1 &lt;= s.length, t.length &lt;= 200</span></code></li>
	<li style="pointer-events: auto;"><span><code>s</code> and <code>t</code> only contain lowercase letters and <code>'#'</code> characters.</span></li>
</ul>

<p style="pointer-events: auto;">&nbsp;</p>
<p><strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time and <code>O(1)</code> space?</p>
</div>