import Hero from '../Images/Teinane-dbdbdb.svg';
import Services from "../Components/Services";

export default function Home() {
  return (
    <>
      <div className="hero home">
        <img src={Hero} alt="title" />
        <div className="copyright">&copy;</div>
        <svg
          width="783"
          height="580"
          className="hero-svg"
          viewBox="0 0 783 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M566 252H335V363H566V252ZM334 251V364H567V251H334Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M121 316L398 316V317L121 317V316Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.999947 330L381 331L380.997 332L0.997316 331L0.999947 330Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M381 39V316H380V39H381Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M398 0V170H397V0H398Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M567 39V209H566V39H567Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M502.177 135.348C502.177 72.5034 560.975 18.3482 642.677 18.3482L642.677 19.3482C561.379 19.3482 503.177 73.1929 503.177 135.348L502.177 135.348Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M475.742 46.8192C529.554 14.3579 606.296 36.7319 648.498 106.691L647.641 107.207C605.649 37.5945 529.48 15.5704 476.258 47.6754L475.742 46.8192Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M567 273V235H568V273H567Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M541 580V338H542V580H541Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M541 338L783 338V339L541 339V338Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M541 402C576.346 402 605 373.346 605 338C605 302.654 576.346 274 541 274C505.654 274 477 302.654 477 338C477 373.346 505.654 402 541 402ZM541 403C576.899 403 606 373.899 606 338C606 302.102 576.899 273 541 273C505.101 273 476 302.102 476 338C476 373.899 505.101 403 541 403Z"
            fill="white"
          />
        </svg>
      </div>
      <Services />
    </>
  );
}
