import { FaHeart } from "react-icons/fa6";

export default function Hearts() {
  return (
    <>
      <div>
        {/*corações 1*/}
        <FaHeart
          size={30}
          style={{ position: "absolute", top: 160, left: 20, rotate: "5deg" }}
        />
        {/* top +30 do coração 2 */}
        <FaHeart
          size={20}
          style={{
            position: "absolute",
            top: 130,
            left: 20,
            rotate: "-5deg",
          }}
        />
        {/* top -30 do coração 1 */}
        <FaHeart
          size={13}
          style={{ position: "absolute", top: 143, left: 50, rotate: "3deg" }}
        />
        {/* top +13 do coração 2 */}
        {/*corações 2*/}
        <FaHeart
          size={30}
          style={{
            position: "absolute",
            top: 440,
            right: 20,
            rotate: "5deg",
          }}
        />
        <FaHeart
          size={20}
          style={{
            position: "absolute",
            top: 410,
            right: 20,
            rotate: "-5deg",
          }}
        />
        <FaHeart
          size={13}
          style={{
            position: "absolute",
            top: 423,
            right: 50,
            rotate: "3deg",
          }}
        />
      </div>
    </>
  );
}
