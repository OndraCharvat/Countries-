export async function getInfoData({ params }) {
  const response = await fetch(
    `https://restcountries.com/v3.1/all${params.id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
const Detail = async () => {
  const data = await getInfoData();
  console.log(data);
  return (
    <div className="dashboard">
      {data.map((post) => (
        <div className="country">
          <div key={post.name.common}>
            <p>
              <span>Official Name: {officialName}</span>
            </p>
            <p>
              <span>Flag Description: {flagDesc}</span>
            </p>
            <p>
              <span>Area: {area} meters</span>
            </p>
            <p>
              <span>Population: {population}</span>
            </p>
            <p>
              <Link href={"/"}>
                <h2>Go Back</h2>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
