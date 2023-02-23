import requests
import json

BD = "https://koobi-v1-default-jrtdb.firebaseio.com/"

def cadastrar(nome, cpf, email, contato, senha):
    """if (buscaChave(email, senha) != None):
        return "Usuário já cadastrado!"""
    usuario = '{"Nome": ' + f'"{nome}"' + ', "CPF": ' + f'"{cpf}"' + ', "Email": ' + f'"{email}"' + ', "Contato": '\
              + f'"{contato}"' + ', "Senha": ' + f'"{senha}"' + '}'
    requisicao = requests.post(BD + 'Usuario/.json', data=usuario)
    if (requisicao.status_code != 200):
        return "Erro ao cadastrar!"
    return "Usuário cadastrado com sucesso!"

"""
def alterar(nome, cpf, email, senha):
    chave = buscaChave(email, senha)
    if (chave != None):
        alteracao = '{"Nome":' + f'"{nome}"' + ', "CPF":' + f'"{cpf}"' + '}'
        requisicao = requests.patch(BD + chave + "Usuario/.json", data=alteracao)
        return "Usuario alterado com sucesso!"
    return "Usuario ou senha incorretos!"


def deletar(email, senha):
    chave = buscaChave(email, senha)
    if (chave != None):
        requisicao = requests.delete(BD + chave + "Usuario/.json")
        return "Usuario deletado com sucesso!"
    return "Usuario ou senha incorretos!"


def buscar(email, senha):
    if (buscaChave(email, senha) != None):
        return "Usuário encontrado!"
    return "Usuario ou senha incorretos!"
"""

def buscaChave(email, senha):
    requisicao = requests.get(BD + 'Usuario/.json')
    dic = requisicao.json()
    for i, values in enumerate(dic.values()):
        if values["Email"] == email and values["Senha"] == senha:
            chave = list(dic.keys())[i]
            print(dic)
            return chave
    return None


if __name__ == "__main__":
    # cadastrar("Jubileu", "01010101010", "jubileu@email.com", "0987654321",  "senha123")
    # buscar("jubileu@email.com", "senha123")
    # alterar("Jubilinho", "02020202020", "jubileu@email.com", "senha123")
    # deletar("jubileu@email.com", "senha123")
    print(buscaChave("jubileu@email.com", "senha123"))
