// eslint-disable-next-line no-unused-vars
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Cartao() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/50 uppercase font-bold">E se no final o que sempre esperaste fosse você?</p>
        <h4 className="text-white font-medium text-large">Você pode muito mais</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP.0VPPHHx-mUpfDgsTYZD_QgHaH-?pid=ImgDet&w=640&h=689&rs=1"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Planejando meu futuro</p>
        <h4 className="text-white font-medium text-large">O avanço do mundo está na direção de seu olhar</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/R.dc2cc18b406a6cadc92fc4d43290c61d?rik=d7dOpRmX%2fJ9BXQ&pid=ImgRaw&r=0"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Pra Frente</p>
        <h4 className="text-white font-medium text-large">Você nunca irá além enquanto o pouco bastar</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/OIP.X9UqiK2omC7kVfuwUf1negHaFj?pid=ImgDet&rs=1"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Novo</p>
        <h4 className="text-black font-medium text-2xl">Se permita buscar pelo novo</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://th.bing.com/th/id/R.13cad1d7e05408e5881e94bbf2eba490?rik=rq35%2b0nnrXfXXg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Dy42UBkxXXc%2fU4P9llH1IWI%2fAAAAAAAAD-I%2fMT2evyWmGFw%2fs1600%2fimagens-imagens-paisagens-natureza-758ab5.jpg&ehk=aMOFfe5Gxh8ql7CG6bP47W0%2bpg0otCjSiZ%2f37kNuRmA%3d&risl=&pid=ImgRaw&r=0"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Entenda cada sinal.</p>
          <p className="text-black text-tiny">Ande até meta.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Crescendo
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Me tornei a minha escolha</p>
        <h4 className="text-white/90 font-medium text-xl">O amor próprio é a maior fonte das minhas escolhas</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://th.bing.com/th/id/R.61ccc4ae0b44ef566469c5099b6a41d4?rik=hobUMrtArbNWyA&pid=ImgRaw&r=0"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60"> Crescendo...</p>
            <p className="text-tiny text-white/60">Se permita crescer.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Avançando</Button>
      </CardFooter>
    </Card>
  </div>
  );
}
