import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { GameBanner } from "../GameBanner";

test('should have a tag with given title and adCount props as text content', () => {
    const title = 'Game Title';
    const adCount = 5;
    const bannerUrl = './game-1.png';

    const {getByText} = render(<GameBanner title={title} adCount={adCount} bannerUrl={bannerUrl} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(adCount + ' anúncios')).toBeInTheDocument();
});