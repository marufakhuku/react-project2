import first from "../../assets/images/card-1.jpg";
import second from "../../assets/images/card-2.jpg";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center place-items-center py-14">
      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={first} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={second} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={first} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={second} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={first} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-slate-200 max-w-96 shadow-xl">
        <figure>
          <img src={second} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center">
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Products;
