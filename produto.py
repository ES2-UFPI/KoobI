import requests
import json

BD = "https://koobi-v1-default-rtdb.firebaseio.com/"


def cadastrar(nome, descricao, genero, lancamento, autor, editora, tipo, valor):
    """if (buscaChave(email, senha) != None):
        return "Usuário já cadastrado!"""
    livro = '{"Nome": ' + f'"{nome}"' + ', "Descrição": ' + f'"{descricao}"' + ', "Gênero": ' + f'"{genero}"' + \
            ', "Lançamento": ' + f'"{lancamento}"' + ', "Autor": ' + f'"{autor}"' + ', "Editora": ' + f'"{editora}"' \
            + ', "Tipo": ' + f'"{tipo}"' + ', "Valor": ' + f'"{valor}"' + '}'
    requisicao = requests.post(BD + 'Produto/.json', data=livro)
    if (requisicao.status_code != 200):
        return "Erro ao cadastrar!"
    return "Produto cadastrado com sucesso!"

"""
def alterar(nome, descricao, lancamento, editora, valor, autor):
    chave = buscaChave(nome, autor, editora)
    if (chave != None):
        alteracao = '{"Nome": ' + f'"{nome}"' + ', "Descrição": ' + f'"{descricao}"' + \
                    ', "Lançamento": ' + f'"{lancamento}"' + ', "Valor": ' + f'"{valor}"' + ', "Editor": ' + f'"{editora}"''}'
        requisicao = requests.patch(BD + chave + "/Produto/.json", data=alteracao)
        return "Livro alterado com sucesso!"
    return "Livro ou senha incorretos!"


def deletar(nome, autor, editora):
    chave = buscaChave(nome, autor, editora)
    if (chave != None):
        requisicao = requests.delete(BD + chave + "Produto/.json")
        return "Livro deletado com sucesso!"
    return "Livro ou senha incorretos!"


def buscar(nome, autor, editora):
    if (buscaChave(nome, autor, editora) != None):
        return "Livro encontrado!"
    return "Livro ou senha incorretos!"
"""

def buscaChave(nome, autor, editora):
    requisicao = requests.get(BD + 'Produto/.json')
    dic = requisicao.json()
    for i, values in enumerate(dic.values()):
        if values['Nome'] == nome and values['Autor'] == autor and values['Editora'] == editora:
            chave = list(dic.keys())[i]
            print(dic)
            return chave
    return None


if __name__ == "__main__":
    # cadastrar("Livro2", "Lorem ipsum sit amet", "Terror", "10/05/1988", "Autor2", "Editora2", "Tipo", "500,00")
    # buscar("Livro", "Autor", "Editora")
    # alterar(nome, descricao, lancamento, editora, valor, autor)
    # deletar("Livro2", "Autor2", "Editora2")
    print(buscaChave("Livro", "Autor", "Editora"))
