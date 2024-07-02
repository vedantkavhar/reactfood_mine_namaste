# lecture 9
## custom hooks and single responsilbity function and online ,offline status check

## custom hoo for online ,offline status
### create this hook
![alt text](image-2.png)

### to use it diff component
#### import ![alt text](image-3.png)
#### decalre ,stor in var ![alt text](image-4.png)
#### use to check status ![alt text](image-5.png)


### Parcel
![alt text](image-1.png)

## optimization
### break into small partss>> do logical bundles 
#### All terms are same
- chunking
- code splitting
- lazy loading
- on demand loading
- dynamic handling
- dynamic import

### to imeplment this lazy loading
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)
- falback works like shimmer ui when the grocery part clicked but not render completely this fallback content shown 
- due to lazy loading sep js file loaded when comp called ,which optimises our app
