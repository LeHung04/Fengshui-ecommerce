import React from 'react';
// import { useMantineTheme } from '@mantine/core';

interface ElectroLogoProps {
  width?: number;
}

function ElectroLogo({ width = 60 }: ElectroLogoProps) {
  const imageUrl =
    'https://sf-static.upanhlaylink.com/img/image_202604237556422e7159bb8b49353927226e593d.jpg                        ';
  return <img src={imageUrl} width={width} alt='PhucAnhDuong Logo' style={{ marginTop: '50px' }} />;
}

export default ElectroLogo;
