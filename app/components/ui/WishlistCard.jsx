"use client";

import { useState } from "react";
import { Heart, Eye, Star } from "lucide-react";
import { Button } from "flowbite-react";
import { Card, CardContent } from "./Card";
import Badge from "./Badge";

const WishlistCard = ({
  product,
  onAddToWishlist,
  onRemoveFromWishlist,
  onQuickView,
  onAddToCart,
  isInWishlist = false,
  showAddToCart = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      onRemoveFromWishlist?.(product.id);
    } else {
      onAddToWishlist?.(product.id);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half-star"
          className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 fill-gray-200 text-gray-200"
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col gap-4 flex-shrink-0 ">
      <Card
        className="w-[270px] h-[250px] bg-app-secondary rounded overflow-hidden border-0 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="relative p-3 h-full">
          {/* Discount Badge */}
          {product.discount && (
            <Badge className="absolute top-0 left-0 bg-secondary-2 text-text hover:bg-secondary-2/80 font-title-12px-regular z-10">
              {product.discount}
            </Badge>
          )}

          {/* New Badge */}
          {product.isNew && (
            <Badge className="absolute top-0 left-0 bg-button-1 text-text hover:bg-button-1/80 font-title-12px-regular z-10">
              NEW
            </Badge>
          )}

          {/* Action Buttons */}
          <div className="absolute top-0 right-0 flex flex-col gap-2 z-10">
            <Button
              variant="secondary"
              size="icon"
              className="w-[34px] h-[34px] bg-app-primary rounded-[17px] hover:bg-app-primary/80"
              onClick={handleWishlistClick}
            >
              <Heart
                className={`w-5 h-5 ${
                  isInWishlist ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="w-[34px] h-[34px] bg-app-primary rounded-[17px] hover:bg-app-primary/80"
              onClick={() => onQuickView?.(product.id)}
            >
              <Eye className="w-5 h-5" />
            </Button>
          </div>

          {/* Product Image */}
          <div className="absolute top-[23px] left-7 w-[190px] h-[180px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Add to Cart Button - Shows on hover or when showAddToCart is true */}
          {(showAddToCart || (isHovered && onAddToCart)) && (
            <div className="absolute bottom-0 left-0 right-0 h-[41px] bg-button rounded-[0px_0px_4px_4px] flex items-center justify-center cursor-pointer transition-all duration-200">
              <button
                onClick={() => onAddToCart?.(product.id)}
                className="w-full h-full flex items-center justify-center"
              >
                <span className="font-title-16px-medium text-white">
                  Add To Cart
                </span>
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <h3 className="font-title-16px-medium text-black">{product.name}</h3>

        <div className="flex items-center gap-3">
          <span className="font-title-16px-medium text-secondary-2">
            {product.currentPrice}
          </span>
          {product.originalPrice && (
            <span className="opacity-50 font-medium text-button text-base line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="opacity-50 font-title-14px-semibold text-text-2">
            {product.reviews}
          </span>
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-2 mt-1">
            {product.colors.map((color, index) => (
              <div
                key={`color-${product.id}-${index}`}
                className="relative w-5 h-5 rounded-full cursor-pointer"
                style={{ backgroundColor: color.color }}
              >
                {color.border && (
                  <div className="absolute inset-0 rounded-full border-2 border-black" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistCard;
