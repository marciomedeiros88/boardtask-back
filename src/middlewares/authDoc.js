async function authDocProducao (req, res, next){
    const { senhaDigitada } = req.body;

    if(req.headers.host.includes('localhost') || req.originalUrl !== '/doc/'){
        //usuario esta no localhost
        return next();
    }

    if(senhaDigitada === process.env.SWAGGER_SENHA_DOC){
        //usuario digitou a senha correta
        return next();
    }

    if(senhaDigitada){  /* for tem que ter o mesmo id/name do html */
        //usuario digitou a senha errada
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
            <form method="post">
                <p style="color: red;">Senha inválida</p>
                <label for="senhaDigitada">Senha da documentação</label>
                <input type="password" name="senhaDigitada" id="senhaDitigada"/>
                <button type="submit"> Entrar</button>
            </form>
        `))
    } else{  /* for tem que ter o mesmo id/name do html */
        //usuario ainda nao digitou a senha e está em modo produção
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
            <form method="post">
                <label for="senhaDigitada">Senha da documentação</label>
                <input type="password" name="senhaDigitada" id="senhaDitigada"/>
                <button type="submit"> Entrar</button>
            </form>
        `))
    }
}

module.exports = authDocProducao;