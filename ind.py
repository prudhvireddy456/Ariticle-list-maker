def samesubstring(s,t,k):
    n=len(s)
    a=[]
    for i in range(n):
        a.append(abs(ord(s[i])-ord(t[i])))
    m=0
    print(a)
    maxi=float('-inf')
    cnt=0
    i=0
    j=0
    while i<n and j<n:
        print(m,cnt,i,j,maxi)
        if m<k:
            m+=a[i]
            if m<=k:
                cnt+=1
            i+=1
        else:
            m=m-a[j]
            j+=1
            maxi=max(maxi,cnt)
            cnt=0
    return maxi
s="uaccd"
t="gbbeg"
k=4
print(samesubstring(s,t,k))