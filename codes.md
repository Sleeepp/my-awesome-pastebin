<details>
<summary>Watermelon</summary>
	
```ruby
w=int(input())
if w%2==0 and w!=2:
	print("YES")
else:
	print("NO")
```
</details>

<details>
<summary>Team</summary>
	
```ruby
n=int(input())
list=[]
for i in range(n):
	m = input().split()
	list.append(m)
output=0
for i in range(n):
	if list[i].count("1")>=2:
		output+=1
	else:
		pass
print(output)
```
</details>

<details>
<summary>Boy or Girl</summary>

```ruby
n=input()
s=set([*n])
if len(s)%2==0:
	print("CHAT WITH HER!")
else:
	print("IGNORE HIM!")
```
</details>

<details>
<summary>Soldier and Bananas</summary>

```ruby
k,n,w=map(int,input().split())
cost=0
for i in range(w+1):
	cost+=i*k
if cost<n:
	print(0)
else:
	print(cost-n)
```
</details>

<details>
<summary>Beautiful Year</summary>

```ruby
import sys
y=int(input())
for i in range(y+1,sys.maxsize):
	s=str(i)
	x=set([j for j in s])
	if len(x)==len(str(y)):
		print(s)
		break
```
</details>
