#elenco membri di una classe e la loro età

studenti=[""]
etastudenti=[]
numerostudenti=int(input("dimmi il numero di studenti: "))
for i in range(0,numerostudenti):
    studente = input("dammi nome studente: ")
    eta = int(input("dammi età studente: "))
    studenti.append(studente)
    etastudenti.append(eta)
anni15 = sum(1 for n in etastudenti if n >= 15)
print(f"gli studenti di eta pari a 15 o > sono: {anni15}")
