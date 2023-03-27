#Lenguaje recursivo 


def L_n (base, rules, n):
    final_L = [base]
    for i in range (n):
            new_base = []
            for item in base: 
                for rule in rules:
                    new_base.append(rule.replace("u", item))
            base= new_base
            final_L.append(base)
    return final_L
    
print (L_n("b",["ub", "uab", "uba", "bua"], 3))