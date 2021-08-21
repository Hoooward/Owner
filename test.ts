const ENS_NAME_REGEX = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)ht(\/.*)?$/

function parseENSAddress(ensAddress){
  const match = ensAddress.match(ENS_NAME_REGEX)
  if (!match) return undefined
  return { ensName: `${match[1].toLowerCase()}ht`, ensPath: match[4] }
}

const result = parseENSAddress('https://www.baidu.ht.com')
console.log('asdasd')
console.log(result)