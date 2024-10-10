import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const {userId} = auth()
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm action="Add" userId={userId} />
    </>
  );
};

export default AddTransformationTypePage;
