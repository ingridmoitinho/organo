import "./Rodape.css";

const Rodape = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/imagens/fundo.png)" }}
    >
      <div>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="./imagens/fb.png" alt="icon-facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="./imagens/tw.png" alt="icon-twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="./imagens/ig.png" alt="icon-instagram" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img src="/imagens/logo.png" alt="logo" />
      </div>

      <div>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;
