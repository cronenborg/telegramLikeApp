import random
a=1
b=1
t=0
while(a<b*3):
    a=int(input("dammi un numero: "))
    b=int(input("dammi un numero: "))
for i in range(random.randint(1,4)):
     t=a+i
     print(f"succesivo: {t}")
     