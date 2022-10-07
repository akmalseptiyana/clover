import Image from "next/image";

import { Container } from "../styles/Container.styled";
import {
  StyledProductDetails,
  Wrapper,
  Preview,
  Slider,
} from "../styles/ProductDetails.styled";
import Button from "../ui/Button";
import "../../lib/hooks/format/currency";

export default function ProductDetails({ details }) {
  return (
    <StyledProductDetails>
      <Container>
        <Wrapper>
          <div>
            <Preview>
              <Image
                src="/images/details-image.png"
                alt="Details Image"
                width={560}
                height={609}
                quality={100}
              />
            </Preview>

            <Slider>
              <div>
                <Image
                  src="/images/image-preview-1.png"
                  alt="Image Slider"
                  width={125}
                  height={125}
                  quality={100}
                />
                <Image
                  src="/images/image-preview-2.png"
                  alt="Image Slider"
                  width={125}
                  height={125}
                  quality={100}
                />
                <Image
                  src="/images/image-preview-3.png"
                  alt="Image Slider"
                  width={125}
                  height={125}
                  quality={100}
                />
                <Image
                  src="/images/image-preview-4.png"
                  alt="Image Slider"
                  width={125}
                  height={125}
                  quality={100}
                />
              </div>
            </Slider>
          </div>

          <div>
            <h2>{details.title}</h2>
            <span>{details.price.currency()}</span>

            <h3>About the product:</h3>
            <p>
              Super slim fit shirt made of high-stretch fabric. Italian collar
              and long sleeves with buttoned cuffs. Front button closure.
            </p>
            <p>
              Regular fit shirt with lapel collar and long sleeves with buttoned
              cuffs. Front button closure.
            </p>

            <form>
              <h3>Find your size</h3>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
              <Button
                href="/cart"
                type="link"
                padding="16px 40px"
                radius="50px"
                display="flex"
                items="center"
                colGap="10px"
                alignSelf="center"
                margin="40px 0 0 0"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 14.5V2.5H0V0.5H3C3.26522 0.5 3.51957 0.605357 3.70711 0.792893C3.89464 0.98043 4 1.23478 4 1.5V13.5H16.438L18.438 5.5H6V3.5H19.72C19.872 3.5 20.022 3.53466 20.1586 3.60134C20.2952 3.66801 20.4148 3.76495 20.5083 3.88479C20.6019 4.00462 20.6668 4.1442 20.6983 4.29291C20.7298 4.44162 20.7269 4.59555 20.69 4.743L18.19 14.743C18.1358 14.9592 18.011 15.1512 17.8352 15.2883C17.6595 15.4255 17.4429 15.5 17.22 15.5H3C2.73478 15.5 2.48043 15.3946 2.29289 15.2071C2.10536 15.0196 2 14.7652 2 14.5ZM4 21.5C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5C2 18.9696 2.21071 18.4609 2.58579 18.0858C2.96086 17.7107 3.46957 17.5 4 17.5C4.53043 17.5 5.03914 17.7107 5.41421 18.0858C5.78929 18.4609 6 18.9696 6 19.5C6 20.0304 5.78929 20.5391 5.41421 20.9142C5.03914 21.2893 4.53043 21.5 4 21.5ZM16 21.5C15.4696 21.5 14.9609 21.2893 14.5858 20.9142C14.2107 20.5391 14 20.0304 14 19.5C14 18.9696 14.2107 18.4609 14.5858 18.0858C14.9609 17.7107 15.4696 17.5 16 17.5C16.5304 17.5 17.0391 17.7107 17.4142 18.0858C17.7893 18.4609 18 18.9696 18 19.5C18 20.0304 17.7893 20.5391 17.4142 20.9142C17.0391 21.2893 16.5304 21.5 16 21.5Z"
                    fill="#fff"
                  />
                </svg>
                Add to Cart
              </Button>
            </form>
          </div>
        </Wrapper>
      </Container>
    </StyledProductDetails>
  );
}
