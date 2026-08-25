import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

export default function HomeScreen() {
  const [quantAlunos, setQuantAlunos] = useState('');
  const [quantGrupos, setQuantGrupos] = useState('');
  const [listaExcluidos, setListaExcluidos] = useState('');

  const formarGrupos = (qtdAlunos: string, qntGrupos: string, excluidos: string) => {
    const alunos = parseInt(quantAlunos, 10);
    const grupos = parseInt(quantGrupos, 10);

    //converte string em uma lista somente com números
    const listafatiada = excluidos.split(',');
    const listaConvertida = listafatiada.map(num => parseInt(num.trim(), 10))
    const resultListaExcluidos = listaConvertida.filter(num => !isNaN(num))

    //cria uma lista ordenada e exclui aqueles marcados para exclusão
    const listaOrdenada = Array.from({ length: alunos }, (_, idx) => idx + 1)
      .filter(num => !resultListaExcluidos.includes(num));

    //embaralhamento dos números
    for (let i = listaOrdenada.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listaOrdenada[i], listaOrdenada[j]] = [listaOrdenada[j], listaOrdenada[i]];
    }

    //monta as fatias dos grupos
    const tamanhoBase = Math.floor(listaOrdenada.length / grupos)
    const resto = listaOrdenada.length % grupos;

    const listaPronta: number[][] = []
    let indiceAtual = 0;

    for (let i = 0; i < grupos; i++) {
      const tamDoGrupo = tamanhoBase + (i < resto ? 1 : 0);
      console.log('tamDoGrupo', tamDoGrupo);
      const fatia = listaOrdenada.slice(indiceAtual, indiceAtual + tamDoGrupo);
      listaPronta.push(fatia);
      indiceAtual += tamDoGrupo;
    }

    console.log('listaPronta',listaPronta);
  };

  const handleExcluidos = (text: string) => {
    const listaNormatizada = text.replace(/[^0-9,]/g, '');
    setListaExcluidos(listaNormatizada);
  };

  const handleAlunos = (text: string) => {
    if (text === '0') return setQuantAlunos(text.replace(/[0]/, ''));
    setQuantAlunos(text.replace(/[^0-9]/g, ''));
  };

  const handleGrupos = (text: string) => {
    if (text === '0') return setQuantGrupos(text.replace(/[0]/, ''));
    setQuantGrupos(text.replace(/[^0-9]/g, ''));
  };

  return (
    <View className="flex-1 items-center bg-slate-900 p-4">
      <View className='bg-teal-500 rounded-xl p-4 w-full max-w-sm items-center mt-4'>
        <View className='flex-row gap-10'>
          <View>
            <Text className='text-slate-100 text-xl mt-4'>
              {'Quantos \n alunos?'}
            </Text>
            <TextInput
              className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-20 text-slate-100 text-xl text-center'
              cursorColor={'#f1f5f9'}
              maxLength={2}
              inputMode='numeric'
              value={quantAlunos}
              onChangeText={handleAlunos}
            />
          </View>
          <View >
            <Text className='text-slate-100 text-xl mt-4'>
              {'Quantos \n grupos?'}
            </Text>
            <TextInput
              className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-20 text-slate-100 text-xl text-center'
              cursorColor={'#f1f5f9'}
              maxLength={2}
              inputMode='numeric'
              value={quantGrupos}
              onChangeText={handleGrupos}
            />
          </View>
        </View>
        <Text className='text-slate-100 text-xl mt-8'>
          Excluir aluno ou alunos?
        </Text>
        <TextInput
          className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-full text-slate-100 text-xl text-center '
          cursorColor={'#f1f5f9'}
          keyboardType="numbers-and-punctuation"
          inputMode="text"
          placeholder='Separar por vírgula ex.: 3,7,26'
          placeholderTextColor={'#94a3b8'}
          value={listaExcluidos}
          onChangeText={handleExcluidos}
        />
        <Pressable
          className='bg-slate-900 w-full h-16 mt-10 rounded-lg justify-center items-center'
          onPress={() => formarGrupos(quantAlunos, quantGrupos, listaExcluidos)}
        >
          <Text className='text-slate-100 font-bold text-xl '>Gerar Grupos</Text>
        </Pressable>
      </View>
    </View>
  );
}


